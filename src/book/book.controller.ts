import { Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './Schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(
        @InjectModel(Book.name)
        private bookModel : mongoose.Model<Book>
    ){}

    async findAll() :Promise<Book[]>{
        const books = await this.bookModel.find()
        return books
    }
}
