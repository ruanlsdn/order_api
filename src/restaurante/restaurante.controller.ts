import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('restaurante')
@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Post()
  create(@Body() createRestauranteDto: CreateRestauranteDto) {
    return this.restauranteService.create(createRestauranteDto);
  }

  @Get()
  findAll() {
    return this.restauranteService.findAll();
  }

  @Get(':nome')
  findOne(@Param('nome') nome: string) {
    return this.restauranteService.findByName(nome);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestauranteDto: UpdateRestauranteDto,
  ) {
    return this.restauranteService.update(id, updateRestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restauranteService.remove(id);
  }
}
