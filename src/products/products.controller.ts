import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  findAll(): Promise<Products[]> {
    return this.productService.findAll();
  }
}
