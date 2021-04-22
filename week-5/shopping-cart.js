//Create shopping cart class with constructor.
export class ShoppingCart{
    constructor(){
        //Create a products property set to an empty array.
        this.products = [];
    }
    //Create count function that returns length of products array.
    count(){
        return products.length;        
    }
    //Create function -add w/ parameter for product object.
    add(product){
        //Add product to the products array
        this.product = products.push(product);
    }        
    

    //Created iterator (i) in the body use a for of statement to loop products array.
    myIterator(){
    for (let i of products){
        yield;
    }
  }
}