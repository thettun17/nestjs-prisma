import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async create(
    @Body() productCreateDto: Prisma.ProductCreateInput,
  ): Promise<Product> {
    return this.productService.create(productCreateDto);
  }

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productUpdateDto: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    return this.productService.update(id, productUpdateDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
	this.productService.remove(id);
  }
}
