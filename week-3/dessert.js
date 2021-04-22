/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/

//Import statement for product object.
import { Product } from "./product.js";

//Create Dessert class, inherit Product object.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}