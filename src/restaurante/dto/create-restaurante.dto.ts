import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRestauranteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;
}
