import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './Schemas/book.schema';

@Injectable()
export class BookService {
     constructor(
        @InjectModel(Book.name)
        private bookModel : mongoose.Model<Book>
    ){}

    async findAll() :Promise<Book[]>{
        const books = await this.bookModel.find()
        return books
    }

    async create(book:Book): Promise<Book> {
        const res = await this.bookModel.create(book)
        return res
    }
}
