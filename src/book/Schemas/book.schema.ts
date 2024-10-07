import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Cotegory{
    ADVENTURE= "Adventure",
    CLASSICS = "Classics",
    CRIMS = "Crims",
    FANTASY = "Fantasy",

}


@Schema({
    timestamps: true
})
export class Book{

    @Prop()
    title:string;
    @Prop()
    description:string;
    @Prop()
    aurhor:string;
    @Prop()
    price:number;
    @Prop()
    cotegory:Cotegory
}

export const BookSchema = SchemaFactory.createForClass(Book)