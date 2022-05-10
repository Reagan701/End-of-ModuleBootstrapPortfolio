function ChangeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue <700){
        navbar.style.background = "transparent";
    }else if(scrollValue >700 && scrollValue<2000){
        navbar.style.background = "blue"
    }else{
        navbar.style.background = "white";
    }
    console.log(scrollValue);
}

window.addEventListener('scroll', ChangeBg);