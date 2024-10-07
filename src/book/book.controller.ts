import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './Schemas/book.schema';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookservice:BookService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
       return this.bookservice.findAll()
    }

    @Post()
    async createBook(
        @Body()
            book:CreateBookDto
        ):Promise<Book>{
        return this.bookservice.create(book)
    }

    @Get(":id")
    async getById(@Param("id")id:string):Promise<Book>{
       return this.bookservice.findById(id)
    }

    @Put(":id")
    async updateBook(
        @Param("id")
        id:string,
        @Body()
            book:UpdateBookDto
        ):Promise<Book>{
        return this.bookservice.updateById(id,book)
    }
    @Delete(":id")
    async deleteBook(
        @Param("id")
        id:string
        ):Promise<Book>{
        return this.bookservice.deleteById(id)
    }

}
