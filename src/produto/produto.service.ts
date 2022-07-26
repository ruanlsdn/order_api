import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.create({ data });
  }

  async findAll(): Promise<Produto[]> {
    return await this.prisma.produto.findMany({});
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
