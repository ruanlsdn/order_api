import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comanda } from './entities/comanda.entity';

@Injectable()
export class ComandaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(mesa_id: string): Promise<void> {
    await this.prisma.comanda.create({
      data: { mesa_id: mesa_id },
    });
  }

  async findOne(id: string): Promise<Comanda> {
    return await this.prisma.comanda.findUnique({
      where: { id },
      select: {
        id: true,
        pedidos: {
          select: {
            quantidade: true,
            produto: { select: { descricao: true } },
          },
        },
      },
    });
  }

  async findAll(): Promise<Comanda[]> {
    return await this.prisma.comanda.findMany({
      select: {
        id: true,
        pedidos: {
          select: {
            quantidade: true,
            produto: { select: { descricao: true } },
          },
        },
      },
    });
  }
}
