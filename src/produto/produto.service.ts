import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { ProdutoFindByRestauranteId } from './interfaces/produto-find-by-restauranteId.interface';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.create({ data });
  }

  async findAll(): Promise<Produto[]> {
    return await this.prisma.produto.findMany({});
  }

  async findByRestauranteId(
    restauranteId: string,
  ): Promise<ProdutoFindByRestauranteId[]> {
    return await this.prisma.produto.findMany({
      select: {
        id: true,
        descricao: true,
        preco: true,
        Categoria: { select: { descricao: true } },
      },
      where: { restaurante_id: restauranteId },
      orderBy: {
        Categoria: { descricao: Prisma.SortOrder.asc },
      },
    });
  }

  async findByDescricao(
    descricao: string,
    restauranteId: string,
  ): Promise<ProdutoFindByRestauranteId[]> {
    return await this.prisma
      .$queryRaw`SELECT p.id, p.descricao, p.preco, c.descricao FROM "Produto" as p
       LEFT JOIN "Categoria" as c ON p.categoria_id = c.id 
       WHERE c.descricao like '${descricao}%' AND p.restaurante_id = ${restauranteId};`;
  }

  async findByRestauranteIdAndCategoria(
    restauranteId: string,
    categoria: string,
  ): Promise<ProdutoFindByRestauranteId[]> {
    return await this.prisma.produto.findMany({
      select: {
        id: true,
        descricao: true,
        preco: true,
        Categoria: { select: { descricao: true } },
      },
      where: {
        restaurante_id: restauranteId,
        AND: { Categoria: { descricao: categoria } },
      },
      orderBy: {
        Categoria: { descricao: Prisma.SortOrder.asc },
      },
    });
  }

  async findOne(id: string): Promise<Produto> {
    return await this.prisma.produto.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.produto.delete({ where: { id } });
  }
}
