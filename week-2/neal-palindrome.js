//***Functions****/

//Create function to getTodaysDate.
function getTodaysDate(){
    //Return new Date(), local string with parameters "en-US".
    return new Date().toLocaleDateString("en-US");
    }
    
    //Create function getLength, single parameter for empty string value, return string length.
    function getLength(str){
    return str.length
    }
    /*Create function named reverse, create character array (split('')) then reverse using built in function. Then
    join array and remove ('') space between letters in array.*/
    function reverse(str){
    return ((str.split('')).reverse()).join('');
    }
    
    /* Create function isPalindrome with empty string. 
    Call Reverse function Boolean for is reverse is equal to string. Return string lower c*/
    function isPalindrome(str){
    {
        if (reverse(str) === str){ 
            //Return string lower case is (bold, underline) a palindrome.
        return (str.toLowerCase()+ "<u><b> is</b></u>" + " a palindrome!")}
            //Return string to lower case is not (bold, underline) a palindrome.
        else return (str.toLowerCase() + " <u><b> is not</b></u> " + " a palindrome!");
    }
    }
    
    

/* On click event.*/
document.getElementById("btnCheckPhrase").onclick = function() {
    //Capture txtPhrase variable capture user txtPhrase.
let txtPhrase = document.getElementById("txtPhrase").value;
//AssignResults variable set to div. 
var assignResults = document.getElementById("assign-results-header");



//***Variables****/

//Create today variable assign results of getTodaysDate() call.
var today = getTodaysDate();

//Create len variable assign results of the getLength() call.
var len = getLength(txtPhrase);

//Create reversedPhrase variable assign results of reverse() call.
var reversedPhrase = reverse(txtPhrase);


//Create header variable that returns string for today, len, reversedPhrase with new lines in between.
var header = (`Date:${today}<br>
Original Phrase:${txtPhrase}<br>
Reversed Phrase:${reversedPhrase}<br>
Phrase Length:${len}`);

//Binding header to "assign-results-header".
document.getElementById("assign-results-header").innerHTML= header;

document.getElementById("results").innerHTML= isPalindrome(txtPhrase);

//==============================================================================================
//Test to make sure header string is returning correctly.
console.log(header);
//================================================================================================
}

