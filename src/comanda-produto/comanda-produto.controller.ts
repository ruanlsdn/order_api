import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandaProdutoService } from './comanda-produto.service';
import { CreateComandaProdutoDto } from './dto/create-comanda-produto.dto';
import { UpdateComandaProdutoDto } from './dto/update-comanda-produto.dto';

@ApiTags('comanda_produto')
@Controller('comanda-produto')
export class ComandaProdutoController {
  constructor(private readonly service: ComandaProdutoService) {}

  @Post()
  create(@Body() dto: CreateComandaProdutoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComandaProdutoDto: UpdateComandaProdutoDto,
  ) {
    return this.service.update(+id, updateComandaProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
