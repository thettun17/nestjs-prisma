import { Injectable } from '@nestjs/common';
import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}
  async create(reviewCreateDto: Prisma.ReviewCreateInput): Promise<Review> {
    return await this.prisma.review.create({
        data: reviewCreateDto
    })
  }

  async index(): Promise<Review[]> {
    return await this.prisma.review.findMany({
        include: {
            product: true
        }
    })
  }
}
