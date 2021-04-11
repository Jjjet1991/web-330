/*
=====================================================
; Title: Assignment 3 Restaurant App
; Author: Professor Krasso
; Date 4 April 2021
; Modified By: Jourdan Neal
; Description: Restaurant App, using JS import/export.
=====================================================
*/

//Create a class named Bill, export the class.
export class Bill {
    //Add properties for beverages, desserts, main courses, and appetizers.
    constructor(_beverages, _desserts,_mainCourses, _appetizers){
    //Assign properties to open array.
    this._beverages = [];
    this._desserts = [];
    this._mainCourses = [];
    this._appetizers = [];
}

//Create addBeverage function, push to _beverages array
addBeverage(beverage){
    this._beverages.push(beverage);
}

//Create addDessert function, push to _beverages array
addDessert(dessert){
    this._desserts.push(dessert);
}

//Create getTotal() function.
getTotal(){
    let total = 0;
    //For each loop iterating through _beverages array.
    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price)
    })
        
    //For each loop iterating through _desserts array.
    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price)
    })

    //For each loop iterating through _appetizers array.
    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price)
    })

    //For each loop iterating through _main-courses array.
    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price)
    })
    //Return total value.
    return total;
}
}