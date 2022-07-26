import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRestauranteDto) {
    return await this.prisma.restaurante.create({ data });
  }

  async findAll() {
    return await this.prisma.restaurante.findMany({});
  }

  findByName(nome: string) {
    return this.prisma.restaurante.findUnique({
      where: { nome },
    });
  }

  update(id: string, data: UpdateRestauranteDto) {
    return this.prisma.restaurante.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.restaurante.delete({ where: { id } });
  }
}
