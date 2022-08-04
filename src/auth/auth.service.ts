import { Injectable } from '@nestjs/common';
import { Funcionario } from '@prisma/client';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  async validate(nome: string, senha: string) {
    let funcionario: Funcionario;

    try {
      funcionario = await this.funcionarioService.findOne(nome);
    } catch (error) {
      return null;
    }

    const senhaValida = compareSync(senha, funcionario.senha);
    if (!senhaValida) return null;

    return funcionario;
  }
}
