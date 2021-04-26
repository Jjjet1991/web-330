/*
=====================================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Krasso
; Date 25 April 2021
; Modified By: Jourdan Neal
; Description: Using flex css to create future value calculator.
=====================================================
*/

//Create RequiredField class with name and field parameters. Export the class.
export class RequiredField {
    constructor(name, field){
        //Set parameters to class properties.
        this.name = name;
        this.field = field;
    }

    //Create validate function--return Boolean(this.field)-will return true or false.
    validate(){
        return new Boolean(this.field)//Should return true if there is string text in field.
    }

    //Create a function-getMessage and return string message.
    getMessage(){
        return ('<name> is a required field.')
    }
}