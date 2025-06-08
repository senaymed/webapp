import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  // Get the drugs By First letter

  @Get()
  async getDrugs(
    @Query('startsWith') startsWith: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20'
  ) {
    try {
      if (!startsWith) {
        throw new HttpException('Missing startsWith query parameter', HttpStatus.BAD_REQUEST);
      }
      const pageNum = parseInt(page, 10) || 1;
      const limitNum = parseInt(limit, 10) || 20;
      const allDrugs = await this.drugsService.getDrugsByFirstLetter(startsWith);
      const total = allDrugs.length;
      const start = (pageNum - 1) * limitNum;
      const end = start + limitNum;
      const drugs = allDrugs.slice(start, end);
      return { drugs, total, page: pageNum, limit: limitNum };
    } catch (error) {
      console.error(`Error getting drugs starting with ${startsWith}:`, error);
      throw new HttpException(
        error.message || 'Failed to fetch drugs', 
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('detail')
  async getDrugDetail(@Query('name') name: string) {
    try {
      if (!name) {
        throw new HttpException('Missing name query parameter', HttpStatus.BAD_REQUEST);
      }
      return await this.drugsService.getDrugDetailByName(name);
    } catch (error) {
      console.error(`Error getting drug detail for ${name}:`, error);
      throw new HttpException(
        error.message || 'Failed to fetch drug detail', 
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
} 
