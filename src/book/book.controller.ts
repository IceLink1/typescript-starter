import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from './Schemas/book.schema';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
    constructor(private bookservice:BookService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
       return this.bookservice.findAll()
    }

    @Post()
    async createBook(@Body()book):Promise<Book>{
        return this.bookservice.create(book)
    }
}
