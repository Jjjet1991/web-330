/*; Title: Assignment 5.2 Bob's Automotive Repair
; Author: Professor Krasso
; Date  18 April 2021
; Modified By: Jourdan Neal
; Description: Bobs automotive shopping cart calculation.
=====================================================
*/

//Create a class Shopping cart w/ constructor.
export class ShoppingCart
{
    constructor()
    {
        //In the body of constructor create a property for products and assign empty array.
        this.products = [];
    }
    //Create function count that will return the length of products array.
    count() 
    {
        return this.products.length;
    }
    //Create add product function and push to products array.
    add(product)
    {
        this.products.push(product);
    }
    //Create iterator.
    *[Symbol.iterator]()
    {
        //Iterate through product in the products array. This will also define product.
        for (let product of this.products)
        {
            yield product;
        }
    }
}
//Export the ShoppingCart class.

