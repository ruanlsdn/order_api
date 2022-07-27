import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandaService } from './comanda.service';
import { DividirComandaDto } from './dto/dividir-comanda.dto';
import { Comanda } from './interfaces/comanda.interface';

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

  @Post('dividir-comanda')
  dividirComanda(@Body() dto: DividirComandaDto) {
    return this.comandaService.dividirComanda(dto);
  }

  @Get('finalizar-comanda/:id')
  async finalizarComanda(@Param('id') id: string) {
    return await this.comandaService.finalizarComanda(id);
  }
}
