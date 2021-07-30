import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepo: Repository<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    return await this.productRepo.find();
  }

  async findById(id: number): Promise<any> {
    return await this.productRepo.findOne(id);
  }
}
