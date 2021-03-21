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
    let iconMode = x.classList

    document.body.classList.toggle("dark-theme");//Toggle body.ClassList from light (default) to dark.
}
    
