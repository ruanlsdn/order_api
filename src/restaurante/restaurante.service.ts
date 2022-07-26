import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Restaurante } from './entities/restaurante.entity';

@Injectable()
export class RestauranteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRestauranteDto): Promise<Restaurante> {
    return await this.prisma.restaurante.create({ data });
  }

  async findAll(): Promise<Restaurante[]> {
    return await this.prisma.restaurante.findMany({});
  }

  findByName(nome: string): Promise<Restaurante> {
    return this.prisma.restaurante.findUnique({
      where: { nome },
    });
  }

  update(id: string, data: UpdateRestauranteDto): Promise<Restaurante> {
    return this.prisma.restaurante.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.restaurante.delete({ where: { id } }).catch((error) => {
      throw new NotFoundException(error);
    });
  }
}
