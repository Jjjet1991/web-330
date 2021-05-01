/*; Title: Assignment 1.3 Environment Set Up
; Author: Professor Krasso
; Date 28 March 2021
; Modified By: Jourdan Neal
; Description: Palindrome checker. 
=====================================================
*/

function setDefaultTheme()
{
    //Get value of mode from local storage. 
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;//Setting theme to the body classList value.
    document.getElementById( "icon-mode").classList.add(iconMode);//Add iconMode to classList.
    document.getElementById( "icon-text").innerHTML = iconText;//Bind iconText variable to icon-text HTML. 
    
}

function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme"; 
}


 


    
