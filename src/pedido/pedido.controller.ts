import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { PedidoService } from './pedido.service';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly service: PedidoService) {}

  @Post()
  async createOrUpdate(@Body() dto: PedidoDto): Promise<Pedido> {
    return await this.service.createOrSum(dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
  }
}
