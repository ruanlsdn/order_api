import { Module } from '@nestjs/common';
import { ComandaProdutoService } from './comanda-produto.service';
import { ComandaProdutoController } from './comanda-produto.controller';

@Module({
  controllers: [ComandaProdutoController],
  providers: [ComandaProdutoService]
})
export class ComandaProdutoModule {}
