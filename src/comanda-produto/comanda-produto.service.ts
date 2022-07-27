import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComandaProdutoDto } from './dto/create-comanda-produto.dto';
import { UpdateComandaProdutoDto } from './dto/update-comanda-produto.dto';

@Injectable()
export class ComandaProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateComandaProdutoDto) {
    return await this.prisma.pedido.create({ data });
  }

  findAll() {
    return `This action returns all comandaProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comandaProduto`;
  }

  update(id: number, updateComandaProdutoDto: UpdateComandaProdutoDto) {
    return `This action updates a #${id} comandaProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} comandaProduto`;
  }
}
