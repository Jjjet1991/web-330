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
        this.name = name;
        this.field = field;
    }
    //Create validate function.
    validate()
    {
        return Boolean(this.field);//will return true if this.field is a string.
    };

    //Create getMessage function, returns string value of <name> is a required field.
    getMessage()
    {
        return `${this.name} is a required field.`;
    }
}
//Export the class