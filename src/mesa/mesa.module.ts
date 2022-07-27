import { Module } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { MesaController } from './mesa.controller';
import { ComandaModule } from 'src/comanda/comanda.module';

@Module({
  imports: [ComandaModule],
  controllers: [MesaController],
  providers: [MesaService],
})
export class MesaModule {}
