import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Restaurante } from './entities/restaurante.entity';
import { RestauranteFindUnique } from './interfaces/restaurante-find-unique.interface';

@Injectable()
export class RestauranteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRestauranteDto): Promise<Restaurante> {
    return await this.prisma.restaurante.create({ data });
  }

  async findAll(): Promise<Restaurante[]> {
    return await this.prisma.restaurante.findMany({});
  }

  async findUnique(id: string) {
    return await this.prisma.restaurante.findUnique({
      select: {
        id: true,
        nome: true,
        mesas: {
          select: {
            id: true,
            numero: true,
            agregada: true,
            _count: true,
          },
          orderBy: { numero: Prisma.SortOrder.asc },
        },
      },
      where: { id },
    });
  }

  update(id: string, data: UpdateRestauranteDto): Promise<Restaurante> {
    return this.prisma.restaurante.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.restaurante.delete({ where: { id } }).catch((error) => {
      throw new BadRequestException(error);
    });
  }
}
