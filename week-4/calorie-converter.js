/*; Title: Assignment 4.2 Calorie Converter
; Author: Professor Krasso
; Date 11 April 2021
; Modified By: Jourdan Neal
; Description: Calorie converter with keyboard event.
=====================================================
*/

//Import statement for FoodModel.
import { FoodModel } from "./food-model.js";

//Create CalorieConverter class with static variable called data.
export class CalorieConverter {

    static data = [
    //Populate it with 6 FoodModel objects.
    new FoodModel (1007, "Egg", 78),
    new FoodModel (1008, "Apple", 95),
    new FoodModel (1009, "Hamburger", 345),
    new FoodModel (1010, "Fries", 400),
    new FoodModel (1111, "Banana", 105),
    new FoodModel (1012, "Soda", 150)
];

static find(name){
    //Return data array, use js filter to include items with "name" matching the string, return in lowercase.
return this.data.filter(FoodModel => FoodModel.name.toLowerCase().includes(name));
}

};
//Export the class.
