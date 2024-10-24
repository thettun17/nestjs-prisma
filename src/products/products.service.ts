import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(productCreateDto: Prisma.ProductCreateInput): Promise<Product> {
    return await this.prisma.product.create({
      data: productCreateDto,
    });
  }
}
