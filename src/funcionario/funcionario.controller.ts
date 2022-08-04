import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  async create(@Body() dto: CreateFuncionarioDto) {
    return await this.funcionarioService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.funcionarioService.findAll();
  }

  @Get(':nome')
  async findOne(@Param('nome') nome: string) {
    return await this.funcionarioService.findOne(nome);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateFuncionarioDto) {
    return await this.funcionarioService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.funcionarioService.remove(id);
  }
}
