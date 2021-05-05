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
        let floatField = parseFloat(this.field);
        return floatField < this.max;
    }

    //Create getMessage function return string.
    getMessage(){
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}
//Export the class.