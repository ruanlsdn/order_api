import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateFuncionarioDto) {
    return await this.prisma.funcionario.create({
      data: {
        nome: dto.nome,
        senha: hashSync(dto.senha, 10),
        restaurante_id: dto.restaurante_id,
      },
    });
  }

  async findAll() {
    return await this.prisma.funcionario.findMany({});
  }

  async findOne(nome: string) {
    return await this.prisma.funcionario.findFirst({ where: { nome } });
  }

  async update(id: string, data: UpdateFuncionarioDto) {
    return await this.prisma.funcionario.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.funcionario.delete({ where: { id } });
  }
}
