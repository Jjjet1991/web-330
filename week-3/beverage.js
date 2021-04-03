/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/

//Import Product statement.
import {Product} from "./products.js";
//Export Beverage class inherit Product object.
export class Beverage extends Products
{
    constructor(name, price)
    {
        super(name,price);
    }
}