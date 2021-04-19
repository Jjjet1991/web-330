//Create Product class with constructors for name and price.
export class Product {
    constructor(name, price) {
        this.name= name;
        this.price = price;     
        //Set new property for ID.
        this. id = Math.random().toString(radix = 16).slice(2);   
    }
}