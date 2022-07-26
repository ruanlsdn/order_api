import { Restaurante } from 'src/restaurante/entities/restaurante.entity';

export class Mesa {
  id?: string;
  numero?: number;
  created_at?: Date;
  updated_at?: Date;
  restaurante_id?: string;
  Restaurante?: Restaurante;
}
