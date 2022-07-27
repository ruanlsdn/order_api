import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PedidoDto } from './dto/create-comanda-produto.dto';
import { PedidoService } from './pedido.service';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly service: PedidoService) {}

  @Post()
  create(@Body() dto: PedidoDto) {
    return this.service.create(dto);
  }
}
