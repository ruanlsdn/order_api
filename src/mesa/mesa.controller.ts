import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Mesa } from './entities/mesa.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateMesaByQuantidadeDto } from './dto/create-mesa-by-quantidade.dto copy';

@ApiTags('mesa')
@Controller('api/v1/mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()
  async create(@Body() dto: CreateMesaDto): Promise<Mesa> {
    return await this.mesaService.create(dto);
  }
  @Post('create-by-quantidade')
  async createByQuantidade(
    @Body() dto: CreateMesaByQuantidadeDto,
  ): Promise<Mesa[]> {
    return await this.mesaService.createByQuantidade(dto);
  }

  @Get()
  async findAll(): Promise<Mesa[]> {
    return await this.mesaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mesaService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMesaDto: UpdateMesaDto,
  ): Promise<Mesa> {
    return await this.mesaService.update(id, updateMesaDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.mesaService.remove(id);
  }
}
