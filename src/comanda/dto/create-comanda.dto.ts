import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComandaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cliente: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  mesa_id: string;
}
