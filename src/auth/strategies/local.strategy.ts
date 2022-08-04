import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'nome',
      passwordField: 'senha',
    });
  }

  async validate(nome: string, senha: string): Promise<any> {
    const user = await this.authService.validate(nome, senha);

    if (!user) {
      throw new UnauthorizedException('Email e/ou senha inválidos.');
    }

    return user;
  }
}
