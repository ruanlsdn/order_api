import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PedidoDto } from './dto/create-comanda-produto.dto';
import { UpdateComandaProdutoDto } from './dto/update-comanda-produto.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PedidoDto) {
    return await this.prisma.pedido.create({ data });
  }
}
