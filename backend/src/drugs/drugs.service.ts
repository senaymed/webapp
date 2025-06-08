import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Drug } from './entities/drug.entity';

@Injectable()
export class DrugsService {
  constructor(
    @InjectRepository(Drug)
    private drugRepository: Repository<Drug>,
  ) {}

  async getDrugsByFirstLetter(letter: string) {
    const CACHE_HOURS = 24;
    const now = new Date();
    // 1. Check cache
    const cached = await this.drugRepository.find({
      where: { name: ILike(`${letter}%`) },
      order: { name: 'ASC' },
    });
    if (cached.length > 0) {
      // Check if cache is fresh (all entries fetched within CACHE_HOURS)
      const isFresh = cached.every(drug => {
        const diff = (now.getTime() - new Date(drug.lastFetched).getTime()) / (1000 * 60 * 60);
        return diff < CACHE_HOURS;
      });
      if (isFresh) {
        return cached.map(d => d.name);
      }
    }
    // Helper to fetch all pages from OpenFDA
    async function fetchAllPages(baseUrl: string): Promise<any[]> {
      let results: any[] = [];
      let skip = 0;
      const limit = 100;
      while (true) {
        const url = `${baseUrl}&skip=${skip}`;
        const res = await fetch(url);
        if (!res.ok) break;
        const data = await res.json();
        if (!data.results || data.results.length === 0) break;
        results = results.concat(data.results);
        if (data.results.length < limit) break;
        skip += limit;
      }
      return results;
    }
    const brandNameBase = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${letter}*&limit=100`;
    const genericNameBase = `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${letter}*&limit=100`;
    try {
      const [brandResults, genericResults] = await Promise.all([
        fetchAllPages(brandNameBase),
        fetchAllPages(genericNameBase)
      ]);
      const brandDrugs = brandResults.flatMap((item: any) => {
        const brandNames = item.openfda.brand_name || [];
        const genericNames = item.openfda.generic_name || [];
        return [...brandNames, ...genericNames];
      }) || [];
      const genericDrugs = genericResults.flatMap((item: any) => {
        const brandNames = item.openfda.brand_name || [];
        const genericNames = item.openfda.generic_name || [];
        return [...brandNames, ...genericNames];
      }) || [];
      const allDrugs = [...brandDrugs, ...genericDrugs];
      const uniqueDrugs = Array.from(new Set(allDrugs))
        .filter((name): name is string => {
          if (!name || typeof name !== 'string' || name.trim() === '') return false;
          const trimmedName = name.trim();
          if (!trimmedName.toLowerCase().startsWith(letter.toLowerCase())) return false;
          if (trimmedName.toLowerCase().includes('cream') || 
              trimmedName.toLowerCase().includes('diaper') || 
              trimmedName.toLowerCase().includes('lotion') ||
              trimmedName.toLowerCase().includes('shampoo') ||
              trimmedName.toLowerCase().includes('soap')) return false;
          return true;
        })
        .map(name => name.trim())
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      // Update the database with new results and lastFetched
      await this.drugRepository.delete({ name: ILike(`${letter}%`) });
      await this.drugRepository.save(uniqueDrugs.map(name => ({ name, lastFetched: now })));
      return uniqueDrugs;
    } catch (error) {
      // If API fails, try to get from cache
      if (cached.length > 0) {
        return cached.map(d => d.name);
      }
      return [];
    }
  }

  async getDrugDetailByName(name: string) {
    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22${encodeURIComponent(name)}%22&limit=1`;
    const response = await fetch(url);
    const data: any = await response.json();
    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      return {
        name,
        description: result.description?.[0] || null,
        indications_and_usage: result.indications_and_usage?.[0] || null,
        purpose: result.purpose?.[0] || null,
        warnings: result.warnings?.[0] || null,
        dosage_and_administration: result.dosage_and_administration?.[0] || null,
        adverse_reactions: result.adverse_reactions?.[0] || null,
        contraindications: result.contraindications?.[0] || null,
        active_ingredient: result.active_ingredient?.[0] || null,
        inactive_ingredient: result.inactive_ingredient?.[0] || null,
        precautions: result.precautions?.[0] || null,
        drug_interactions: result.drug_interactions?.[0] || null,
        overdosage: result.overdosage?.[0] || null,
        how_supplied: result.how_supplied?.[0] || null,
        storage_and_handling: result.storage_and_handling?.[0] || null,
        ...result,
      };
    }
    return { name, description: null };
  }
} 