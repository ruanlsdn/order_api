import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandaService } from './comanda.service';
import { Comanda } from './entities/comanda.entity';

@ApiTags('comanda')
@Controller('comanda')
export class ComandaController {
  constructor(private readonly comandaService: ComandaService) {}

  @Get()
  async findAll(): Promise<Comanda[]> {
    return await this.comandaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Comanda> {
    return await this.comandaService.findOne(id);
  }
}
