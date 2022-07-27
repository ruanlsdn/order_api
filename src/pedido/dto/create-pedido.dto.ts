import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PedidoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  quantidade: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comanda_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  produto_id: string;
}
