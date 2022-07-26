import { PartialType } from '@nestjs/swagger';
import { CreateMesaDto } from './create-mesa.dto';

export class UpdateMesaDto extends PartialType(CreateMesaDto) {}
