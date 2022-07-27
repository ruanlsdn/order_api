import { Injectable } from '@nestjs/common';
import { PedidoService } from 'src/pedido/pedido.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { DividirComandaDto } from './dto/dividir-comanda.dto';
import { Comanda } from './interfaces/comanda.interface';

@Injectable()
export class ComandaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pedidoService: PedidoService,
  ) {}

  async create(mesa_id: string) {
    return await this.prisma.comanda.create({
      data: { mesa_id: mesa_id },
    });
  }

  async findOne(id: string): Promise<Comanda> {
    return await this.prisma.comanda.findUnique({
      where: { id },
      select: {
        id: true,
        mesa_id: true,
        pedidos: {
          select: {
            id: true,
            quantidade: true,
            produto: { select: { descricao: true, preco: true } },
          },
        },
      },
    });
  }

  async findAll(): Promise<Comanda[]> {
    return await this.prisma.comanda.findMany({
      select: {
        id: true,
        mesa_id: true,
        pedidos: {
          select: {
            id: true,
            quantidade: true,
            produto: { select: { descricao: true, preco: true } },
          },
        },
      },
    });
  }

  async dividirComanda(dto: DividirComandaDto) {
    const novaComanda: Comanda = await this.create(dto.mesa_id);
    dto.pedidos.forEach(
      async (data) =>
        await this.pedidoService.decrease(
          novaComanda.id,
          data.pedido_id,
          data.quantidade,
        ),
    );
  }

  async finalizarComanda(id: string) {
    await this.pedidoService.delete(id);
  }

  async calcularComanda(id: string): Promise<number> {
    let soma: number = 0;
    const comanda: Comanda = await this.findOne(id);
    comanda.pedidos.forEach((data) => {
      soma = soma + data.produto.preco * data.quantidade;
    });
    return soma;
  }
}
