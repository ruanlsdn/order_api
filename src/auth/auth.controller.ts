import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Funcionario } from '@prisma/client';
import { User } from './decorators/funcionario.decorator';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@User() funcionario: Funcionario) {
    return funcionario;
  }
}
