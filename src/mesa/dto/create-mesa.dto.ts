import { IsInt, IsNotEmpty, isNumber, IsString } from 'class-validator';

export class CreateMesaDto {
  @IsInt()
  @IsNotEmpty()
  numero: number;

  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
