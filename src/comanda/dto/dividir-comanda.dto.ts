import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DividirComandaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cliente: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  mesa_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comanda_id: string;

  @IsNotEmpty()
  @ApiProperty()
  pedidos?: { quantidade: number; pedido_id: string }[];
}
