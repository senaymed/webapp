import { DrugsService } from './drugs.service';
export declare class DrugsController {
    private readonly drugsService;
    constructor(drugsService: DrugsService);
    getDrugs(startsWith: string, page?: string, limit?: string): Promise<{
        drugs: string[];
        total: number;
        page: number;
        limit: number;
    }>;
    getDrugDetail(name: string): Promise<any>;
}
