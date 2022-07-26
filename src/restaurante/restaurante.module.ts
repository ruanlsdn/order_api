import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';

@Module({
  controllers: [RestauranteController],
  providers: [RestauranteService]
})
export class RestauranteModule {}
