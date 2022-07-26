import { IsDecimal, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  preco: number;

  @IsString()
  @IsOptional()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
