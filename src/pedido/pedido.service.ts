import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PedidoDto): Promise<Pedido> {
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

  async update(id: string, dto: UpdatePedidoDto) {
    const pedido = await this.findOne(id);

    if (pedido) {
      const novaQtd = Number(pedido.quantidade - dto.quantidade);
      if (novaQtd > 0)
        return await this.prisma.pedido.update({
          where: { id },
          data: {
            ...pedido,
            quantidade: novaQtd,
          },
        });
      await this.delete(pedido.id);
    }
  }

  async findOne(id: string) {
    return await this.prisma.pedido.findUniqueOrThrow({ where: { id } });
  }

  async delete(id: string) {
    await this.prisma.pedido.delete({ where: { id: id } });
  }

  async deleteByComandaId(comandaId: string) {
    await this.prisma.pedido.deleteMany({ where: { comanda_id: comandaId } });
  }

  async subtrairPedidoEInserirEmNovaComanda(
    comandaId: string,
    id: string,
    quantidade: number,
  ) {
    const after: Pedido = await this.findOne(id);
    const before: Pedido = {
      ...after,
      quantidade: Number(after.quantidade - quantidade),
    };

    await this.create({
      comanda_id: comandaId,
      quantidade: quantidade,
      produto_id: before.produto_id,
    });

    if (before.quantidade == 0) {
      await this.delete(before.id);
    } else {
      await this.prisma.pedido.update({
        where: { id: before.id },
        data: before,
      });
    }

    return before;
  }
}
