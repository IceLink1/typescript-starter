import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './Schemas/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{name : "Book" , schema : BookSchema}])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
