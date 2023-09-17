var goLunch = document.getElementById("goLunch");
var goSug = document.getElementById("goSug");
var lunchbox = document.getElementById("lunchbox");
var suggestion = document.getElementById("suggestion");

goLunch.addEventListener('click', navbar);

function navbar(){  
    lunchbox.style.display = 'block';
    suggestion.style.display = 'none';
}


goSug.addEventListener('click', navbar1);

function navbar1(){

    lunchbox.style.display = 'none';
    suggestion.style.display = 'block';
}