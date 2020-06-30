const hamburgerToggle =document.getElementsByClassName('hamburger-toggle');
let hamburgerDisplay = true;


window.addEventListener('resize', showNavItems);
window.addEventListener('click', function(){
    
    if(hamburgerDisplay == true){
        document.getElementById('nav-icon').src = "/images/icon-close.svg";
        document.querySelector(".nav-links").style.display = "block";
        document.querySelector("#headlineSection").style.background = "linear-gradient(#2D314D, #2d314d00)";
    } else {
        document.getElementById('nav-icon').src = "/images/icon-hamburger.svg";
        document.querySelector(".nav-links").style.display = "none";
        document.querySelector("#headlineSection").style.background = "transparent";
    }
    hamburgerDisplay = !hamburgerDisplay;
});

window.onresize = showNavItems();

function showNavItems(){
    if(window.innerWidth > 700){
        document.querySelector(".nav-links").style.display = "block";
    } else {
        document.querySelector(".nav-links").style.display = "none";
    }
    
}


