import { PartialType } from '@nestjs/swagger';
import { CreateComandaProdutoDto } from './create-comanda-produto.dto';

export class UpdateComandaProdutoDto extends PartialType(CreateComandaProdutoDto) {}
