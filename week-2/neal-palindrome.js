//Create function to getTodaysDate.
function getTodaysDate(){
    //Return new Date(), local string with parameters "en-US".
    return new Date().toLocaleDateString("en-US");
}
//Creating empty string variable to use in creating functions.
let stringValue;

//Create function getLength, single parameter for string value, return string length.
function getLength(stringValue){
    return stringValue.length
}
/*Create function named reverse, create character array (split('')) then reverse using built in function. Then
join array and remove ('') space between letters in array.*/
function reverse(stringValue){
    return ((stringValue.split('')).reverse()).join('');
}
/*Log to console using test word "lovely" output --> ylevol*/
console.log(reverse("lovely"));


