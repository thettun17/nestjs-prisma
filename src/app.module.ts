import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReviewsService } from './reviews/reviews.service';

@Module({
  imports: [PrismaModule, ProductsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService, ReviewsService],
})
export class AppModule {}
