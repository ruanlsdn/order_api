import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({ data });
  }

  async findAll(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany({
      orderBy: { descricao: Prisma.SortOrder.asc },
    });
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.categoria.delete({ where: { id } });
  }
}
