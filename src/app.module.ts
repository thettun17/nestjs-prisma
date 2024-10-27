import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReviewsService } from './reviews/reviews.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [PrismaModule, ProductsModule, ReviewsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, ProductsService, ReviewsService, AuthService],
})
export class AppModule {}
