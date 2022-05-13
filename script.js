function ChangeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue <200){
        navbar.style.transition = '0.6s';
        navbar.style.background = "transparent";
    }else{
        navbar.style.background = "white";
    }
    console.log(scrollValue);
}

window.addEventListener('scroll', ChangeBg);