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
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiTags } from '@nestjs/swagger';
import { Produto } from './entities/produto.entity';

@ApiTags('produto')
@Controller('api/v1/produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() dto: CreateProdutoDto): Promise<Produto> {
    return await this.produtoService.create(dto);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return await this.produtoService.findAll();
  }

  @Get('/sql/buscar/:descricao/:restaurandeId')
  async findByDescricao(
    @Param('descricao') descricao: string,
    @Param('restaurandeId') restaurandeId: string,
  ) {
    return await this.produtoService.findByDescricao(descricao, restaurandeId);
  }

  @Get('/buscar/:restauranteId')
  async findByRestauranteId(@Param('restauranteId') restauranteId: string) {
    return await this.produtoService.findByRestauranteId(restauranteId);
  }

  @Get('/buscar/:restauranteId/:categoria')
  async findByRestauranteIdAndCategoria(
    @Param('restauranteId') restauranteId: string,
    @Param('categoria') categoria: string,
  ) {
    return await this.produtoService.findByRestauranteIdAndCategoria(
      restauranteId,
      categoria,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Produto> {
    return await this.produtoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProdutoDto,
  ): Promise<Produto> {
    return await this.produtoService.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.produtoService.remove(id);
  }
}
