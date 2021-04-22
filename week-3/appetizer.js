/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/
//Import Product object.
import { Product } from "./product.js";

//Create Appetizer class to inherit Product object. Export the class. 
export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}