import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { MesaModule } from './mesa/mesa.module';
import { ProdutoModule } from './produto/produto.module';
import { ComandaModule } from './comanda/comanda.module';
import { ComandaProdutoModule } from './pedido/pedido.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RestauranteModule,
    MesaModule,
    ProdutoModule,
    ComandaModule,
    ComandaProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
