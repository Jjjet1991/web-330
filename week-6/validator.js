/*
=====================================================
; Title: Assignment 6.2 Future Value App
; Author: Professor Krasso
; Date 25 April 2021
; Modified By: Jourdan Neal
; Description: Using flex css to create future value calculator.
=====================================================
*/

//Add import statements for RequiredField, FloatField, FloatMinField, FloatMaxField.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from  "./float-max-field.js";

export class Validator 
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    //Create two class properties validators and messages, set them equal to empty array.
        this.validators = [];
        this.messages = [];
    }

    /*Create a function addRequiredField() in the body push a new instance of the RequiredField class
    to validators array using the name and field as parameters.*/
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));        
    }
    //Create addRequiredFloatField in the body push new instance of class to the validators array.
    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }
    //Create addFloatMinField function push to validators array using name, field, min as parameters.
    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    //Create addFloatMaxField with parameter max, push to validators array.
    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //Create validate function.
    validate()
    {
     //------------------------------RequiredField-------------------------------------------------------------
    ///Iterate through each object (RequiredField, FloatField, Min and Max) of validators array.
        for (let validator of this.validators)
        {
            //Call RequiredField.validate()--this should return true or false value.
            if(!validator.validate())
            {
            //If RequireField validate returns false,push iterated.getMessage() to message array.
                {
                    //Push iterated object getMessages to the messages array.
                    this.messages.push(validator.getMessages());
                    return false;
                }
            }
            return true;
        }
        //-----------------------------------FloatField-----------------------------------------------------------
                ///Iterate through each object (RequiredField, FloatField, Min and Max) of validators array.
                for (FloatField of validators)
                {
                    //Call RequiredField.validate()--this should return true or false value.
                    FloatField.validate();
                    //If RequireField validate returns false,push iterated.getMessage() to message array.
                        if (FloatField.validate() == false)
                        {
                            //Push iterated object getMessages to the messages array.
                            this.messages.push.FloatField.getMessages();
                        }
                }
        //-----------------------------------FloatMinField---------------------------------------------------------
                ///Iterate through each object (RequiredField, FloatField, Min and Max) of validators array.
                for (FloatMinField of validators)
                {
                    //Call RequiredField.validate()--this should return true or false value.
                    FloatMinField.validate();
                    //If RequireField validate returns false,push iterated.getMessage() to message array.
                        if (FloatMinField.validate() == false)
                        {
                            //Push iterated object getMessages to the messages array.
                            this.messages.push.FloatMinField.getMessages();
                        }
                }
        //-----------------------------------FloatMaxField---------------------------------------------------------
                ///Iterate through each object (RequiredField, FloatField, Min and Max) of validators array.
                for (FloatMaxField of validators)
                {
                    //Call RequiredField.validate()--this should return true or false value.
                    FloatMaxField.validate();
                    //If RequireField validate returns false,push iterated.getMessage() to message array.
                        if (FloatMaxField.validate() == false)
                        {
                            //Push iterated object getMessages to the messages array.
                            this.messages.push.FloatMaxField.getMessages();
                        }
                }
    }//Closes validate function

}//Closes class
