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
export class FloatMinField
{
    //3 parameters set to class properties.
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }

    //Create validate function.
    validate(){
      //Boolean value will return true if value of parseFloat(field) is greater than min value.
      let floatField = parseFloat(this.field);
      return floatField > this.min;
    }
    
    //Create getMessage function return string.
    getMessage(){
        return ('<name> must be more than <min>. You entered <field>.')
    }
}