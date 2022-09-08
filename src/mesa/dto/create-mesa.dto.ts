import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMesaDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  numero: number;

  @ApiProperty()
  @IsBoolean()
  agregada?: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  restaurante_id: string;
}
