import { PartialType } from '@nestjs/swagger';
import { CreateComandaDto } from './create-comanda.dto';

export class UpdateComandaDto extends PartialType(CreateComandaDto) {}
