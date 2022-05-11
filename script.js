function ChangeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue <855){
        navbar.style.background = "transparent";
    }else{
        navbar.style.background = "white";
    }
    console.log(scrollValue);
}

window.addEventListener('scroll', ChangeBg);