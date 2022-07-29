import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  preco: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  categoria_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
