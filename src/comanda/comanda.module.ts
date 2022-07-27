import { Module } from '@nestjs/common';
import { ComandaService } from './comanda.service';
import { ComandaController } from './comanda.controller';
import { PedidoModule } from 'src/pedido/pedido.module';

@Module({
  imports: [PedidoModule],
  exports: [ComandaService],
  controllers: [ComandaController],
  providers: [ComandaService],
})
export class ComandaModule {}
