import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PedidoDto {
  @IsNotEmpty()
  @IsInt()
  quantidade: number;

  @IsNotEmpty()
  @IsString()
  comanda_id: string;

  @IsNotEmpty()
  @IsString()
  produto_id: string;
}
