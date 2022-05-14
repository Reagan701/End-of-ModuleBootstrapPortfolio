let beenClicked = false;
let hasChanged;

function ChangeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    var screenwidth = screen.width;
    if(screenwidth>768){
        beenClicked=false;
    }

    if(!beenClicked){
        if(scrollValue <200){
            hasChanged = false;
            navbar.style.background = "transparent";
            navbar.style.border = "0px solid black";
            navbar.style.margin = "0px";
            
        }else{
            hasChanged = true;
            navbar.style.background = "#f8f9fa";
            navbar.style.border = "2px solid #190844";
            navbar.style.margin = "10px 40px";
        }
    }
    
    console.log(scrollValue);
}


function backgroundClick(){
    beenClicked = !beenClicked;
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    navbar.style.background = "#f8f9fa";
    navbar.style.border = "2px solid #190844";
    navbar.style.margin = "10px 40px";   
    ChangeBg();
}

window.addEventListener('scroll', ChangeBg);