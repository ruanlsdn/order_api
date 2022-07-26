import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMesaByQuantidadeDto {
  @IsInt()
  @IsNotEmpty()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
