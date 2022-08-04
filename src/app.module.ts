import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { MesaModule } from './mesa/mesa.module';
import { ProdutoModule } from './produto/produto.module';
import { ComandaModule } from './comanda/comanda.module';
import { PedidoModule } from './pedido/pedido.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RestauranteModule,
    MesaModule,
    ProdutoModule,
    ComandaModule,
    PedidoModule,
    CategoriaModule,
    FuncionarioModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
