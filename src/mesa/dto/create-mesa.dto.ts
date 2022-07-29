import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, isNumber, IsString } from 'class-validator';

export class CreateMesaDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  numero: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
