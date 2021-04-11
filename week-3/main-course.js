/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/

//Import statement for Product class.
import {Product} from "./products.js";

///Export Main Course class, inherit Product object.
export class MainCourse extends Product {
    constructor(name, price)
    {
        super(name, price);
    }
}