/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/
//Add import statement for product class from product.js
import { Product } from "./product.js";


//Create Beverage class. Export class.
export class Beverage extends Product
{
    constructor(name, price)
    {
        //Create super function to pass parameters through parent (Product) class.
        super(name, price);
    }
}