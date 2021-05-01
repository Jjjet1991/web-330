/*
=====================================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Krasso
; Date 25 April 2021
; Modified By: Jourdan Neal
; Description: Using flex css to create future value calculator.
=====================================================
*/

//Create a class names FloatField
export class FloatField 
{
    //2 parameters name and field, set to class properties.
    constructor(name, field){
        this.name = name;
        this.field= field;
    }

    //Create a validate function
    validate(){
        //Return true if you can parseFloat or this.field isNAN.
        return !isNaN(parseFloat(this.field));        
    }

    //Create a getMessage function, return string message.
    getMessage(){
        return ('<name> must be a float value. You entered <field>')
    }

}