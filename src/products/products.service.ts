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

  async getAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      include: {
        reviews: true,
        description: true,
        tags: true,
      },
    });
  }

  async findOne(id: number): Promise<Product> {
    return await this.prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        reviews: true,
        description: true,
        tags: true,
      },
    });
  }
  async update(
    id: number,
    productUpdateDto: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    return await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: productUpdateDto.name,
        price: productUpdateDto.price,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
