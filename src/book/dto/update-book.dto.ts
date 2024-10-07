import { Cotegory } from "../Schemas/book.schema";


export class UpdateBookDto{
    readonly title : string;
    readonly description : string;
    readonly author : string;
    readonly price : number;
    readonly cotegory : Cotegory;

}