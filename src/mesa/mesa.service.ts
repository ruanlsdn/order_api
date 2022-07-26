import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMesaByQuantidadeDto } from './dto/create-mesa-by-quantidade.dto copy';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Mesa } from './entities/mesa.entity';

@Injectable()
export class MesaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMesaDto): Promise<Mesa> {
    return await this.prisma.mesa.create({ data });
  }

  async createByQuantidade(dto: CreateMesaByQuantidadeDto): Promise<Mesa[]> {
    const mesas: Mesa[] = [];

    for (let i = 0; i < dto.quantidade; i++) {
      const result = await this.create({
        numero: Number(i + 1),
        restaurante_id: dto.restaurante_id,
      });
      mesas.push(result);
    }

    return mesas;
  }

  async findAll(): Promise<Mesa[]> {
    return await this.prisma.mesa.findMany({
      include: { Restaurante: true },
      orderBy: { numero: Prisma.SortOrder.asc },
    });
  }

  async findOne(id: string): Promise<Mesa> {
    return await this.prisma.mesa.findUnique({
      where: { id },
      include: { Restaurante: true },
    });
  }

  async update(id: string, data: UpdateMesaDto): Promise<Mesa> {
    return await this.prisma.mesa.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.mesa.delete({ where: { id } });
  }
}
