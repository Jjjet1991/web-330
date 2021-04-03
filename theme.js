/*; Title: Assignment 1.3 Environment Set Up
; Author: Professor Krasso
; Date 28 March 2021
; Modified By: Jourdan Neal
; Description: Palindrome checker. 
=====================================================
*/
//Call function to setDefaultTheme.
setDefaultTheme();

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

function toggleMode(x)//Toggle mode, on click event. Toggle body classList from "light-theme" to "dark-theme".
{
    let colorTheme = document.body.classList;//get the body's CSS class
    let iconMode = x.classList;



if (colorTheme.value === "light-theme"){
    localStorage.clear();
    localStorage.setItem("mode", "dark-theme");
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode")
} else 
{
    localStorage.clear();
    localStorage.setItem("mode", "light-theme");
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");

}
colorTheme.value= localStorage.getItem("mode");
iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}
 


    
