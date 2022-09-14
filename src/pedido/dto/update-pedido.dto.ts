import { PartialType } from '@nestjs/swagger';
import { PedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(PedidoDto) {}
