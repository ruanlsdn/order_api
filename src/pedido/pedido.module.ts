import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';

@Module({
  exports: [PedidoService],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
