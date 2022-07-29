import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@ApiTags('categoria')
@Controller('api/v1/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() dto: CreateCategoriaDto): Promise<Categoria> {
    return await this.categoriaService.create(dto);
  }

  @Get()
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Categoria> {
    return await this.categoriaService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriaService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.categoriaService.remove(+id);
  }
}
