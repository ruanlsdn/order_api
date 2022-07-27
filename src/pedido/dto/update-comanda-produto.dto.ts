import { PartialType } from '@nestjs/swagger';
import { PedidoDto } from './create-comanda-produto.dto';

export class UpdateComandaProdutoDto extends PartialType(PedidoDto) {}
