import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRestauranteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
