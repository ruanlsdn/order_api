import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandaService } from './comanda.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { DividirComandaDto } from './dto/dividir-comanda.dto';
import { Comanda } from './interfaces/comanda.interface';

@ApiTags('comanda')
@Controller('api/v1/comanda')
export class ComandaController {
  constructor(private readonly comandaService: ComandaService) {}

  @Post()
  create(@Body() dto: CreateComandaDto) {
    return this.comandaService.create(dto);
  }

  @Get()
  async findAll(): Promise<Comanda[]> {
    return await this.comandaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Comanda> {
    return await this.comandaService.findOne(id);
  }

  @Get('/buscar/:mesaId')
  async findByMesaId(@Param('mesaId') mesaId: string) {
    return await this.comandaService.findByMesaId(mesaId);
  }

  @Post('dividir')
  dividirComanda(@Body() dto: DividirComandaDto) {
    return this.comandaService.dividirComanda(dto);
  }

  @Get('finalizar/:id')
  async finalizarComanda(@Param('id') id: string) {
    return await this.comandaService.finalizarComanda(id);
  }
}
