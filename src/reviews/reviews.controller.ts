import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Prisma, Review } from '@prisma/client';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewsService) {}

  @Post()
  async create(@Body() reveiwCreateDto: Prisma.ReviewCreateInput): Promise<Review> {
    return this.reviewService.create(reveiwCreateDto);
  }

  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewService.index();
  }
}
