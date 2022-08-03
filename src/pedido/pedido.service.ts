import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrSum(data: PedidoDto): Promise<Pedido> {
    let pedido: Pedido;

    const result: Pedido = await this.prisma.pedido.findFirst({
      where: {
        comanda_id: data.comanda_id,
        AND: { produto_id: data.produto_id },
      },
    });

    if (result) {
      pedido = await this.prisma.pedido.update({
        where: { id: result.id },
        data: {
          ...result,
          quantidade: Number(result.quantidade + data.quantidade),
        },
      });

      return pedido;
    }

    return await this.prisma.pedido.create({ data });
  }

  async decrease(comandaId: string, id: string, quantidade: number) {
    console.log(id);
    const after: Pedido = await this.findOne(id);
    const before: Pedido = {
      ...after,
      quantidade: Number(after.quantidade - quantidade),
    };

    await this.createOrSum({
      comanda_id: comandaId,
      quantidade: quantidade,
      produto_id: before.produto_id,
    });

    await this.prisma.pedido.update({
      where: { id: before.id },
      data: before,
    });

    return before;
  }

  async findOne(id: string) {
    return await this.prisma.pedido.findUnique({ where: { id } });
  }

  async delete(comandaId: string) {
    await this.prisma.pedido.deleteMany({ where: { comanda_id: comandaId } });
  }
}
