import { Controller, Get, Param, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  findAll(): Promise<Products[]> {
    return this.productService.findAll();
  }

  /**
   * @param id
   */
  @Get('/:id')
  findById(@Param('id') id: number): Promise<Products[]> {
    return this.productService.findById(id);
  }
}
