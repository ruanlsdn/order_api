import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { MesaModule } from './mesa/mesa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RestauranteModule,
    MesaModule,
    FuncionarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
