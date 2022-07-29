import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { ApiTags } from '@nestjs/swagger';
import { Restaurante } from './entities/restaurante.entity';

@ApiTags('restaurante')
@Controller('api/v1/restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Post()
  async create(
    @Body() createRestauranteDto: CreateRestauranteDto,
  ): Promise<Restaurante> {
    return await this.restauranteService.create(createRestauranteDto);
  }

  @Get()
  async findAll(): Promise<Restaurante[]> {
    return await this.restauranteService.findAll();
  }

  @Get(':nome')
  async findOne(@Param('nome') nome: string) {
    return await this.restauranteService.findByName(nome);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRestauranteDto: UpdateRestauranteDto,
  ): Promise<Restaurante> {
    return await this.restauranteService.update(id, updateRestauranteDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.restauranteService.remove(id);
  }
}
