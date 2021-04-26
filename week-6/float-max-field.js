/*
=====================================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Krasso
; Date 25 April 2021
; Modified By: Jourdan Neal
; Description: Using flex css to create future value calculator.
=====================================================
*/

//Create FloatMaxField
export class FloatMaxField
{
    //3 parameters set to class properties.
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

    //Create validate function.
    validate(){
        //Boolean value will return true if value of parseFloat(field) is less than max value.
        Boolean(parseFloat(field) < max);
    }

    //Create getMessage function return string.
    getMessage(){
        return ('<name> must be less than <max>. You entered <field>.')
    }
}