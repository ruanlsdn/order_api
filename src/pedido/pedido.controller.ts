import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { PedidoService } from './pedido.service';

@ApiTags('pedido')
@Controller('api/v1/pedido')
export class PedidoController {
  constructor(private readonly service: PedidoService) {}

  @Post()
  async create(@Body() dto: PedidoDto): Promise<Pedido> {
    return await this.service.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePedidoDto,
  ): Promise<Pedido> {
    return await this.service.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
  }
}
