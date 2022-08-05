import { Injectable } from '@nestjs/common';
import { PedidoService } from 'src/pedido/pedido.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { DividirComandaDto } from './dto/dividir-comanda.dto';
import { Comanda } from './interfaces/comanda.interface';

@Injectable()
export class ComandaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pedidoService: PedidoService,
  ) {}

  async create(data: CreateComandaDto) {
    return await this.prisma.comanda.create({
      data,
    });
  }

  async findOne(id: string): Promise<Comanda> {
    return await this.prisma.comanda.findUnique({
      where: { id },
      select: {
        id: true,
        cliente: true,
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

  async findByMesaId(mesaId: string): Promise<Comanda[]> {
    let comandas: Comanda[];
    let response = await this.prisma.comanda.findMany({
      select: {
        id: true,
        cliente: true,
        mesa_id: true,
        pedidos: {
          select: {
            id: true,
            quantidade: true,
            produto: {
              select: {
                descricao: true,
                preco: true,
                Categoria: true,
              },
            },
          },
        },
      },
      where: { mesa_id: mesaId },
    });

    response.forEach((item, i) => {
      if (item.pedidos.length > 0) {
        const promise = async () => {
          comandas[i] = { ...item, total: await this.calcularComanda(item) };
        };
        promise();
      }
      comandas[i] = { ...item };
    });

    return comandas;
  }

  async findAll(): Promise<Comanda[]> {
    return await this.prisma.comanda.findMany({
      select: {
        id: true,
        cliente: true,
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
    const novaComanda: Comanda = await this.create({
      cliente: dto.cliente,
      mesa_id: dto.mesa_id,
    });

    dto.pedidos.forEach(
      async (data) =>
        await this.pedidoService.decrease(
          novaComanda.id,
          data.pedido_id,
          data.quantidade,
        ),
    );

    const response = await this.findOne(dto.comanda_id);

    if (response.pedidos.length == 0) {
      await this.finalizarComanda(response.id);
    }
  }

  async finalizarComanda(id: string) {
    await this.prisma.comanda.delete({ where: { id } });
  }

  async calcularComanda(comanda: Comanda): Promise<number> {
    let soma: number = 0;

    comanda.pedidos.forEach((data) => {
      soma = soma + data.produto.preco * data.quantidade;
    });
    return soma;
  }
}
