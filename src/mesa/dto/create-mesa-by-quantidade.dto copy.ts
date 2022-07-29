import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMesaByQuantidadeDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
