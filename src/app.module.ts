import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
