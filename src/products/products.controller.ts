import { Body, Controller, Post } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    async create(@Body() productCreateDto: Prisma.ProductCreateInput): Promise<Product> {
        return this.productService.create(productCreateDto)
    }
}
