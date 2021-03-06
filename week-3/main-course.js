/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/
//Import Product object from js file.
import { Product } from "./product.js";

//export MainCourse class, using product parameters.
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}

