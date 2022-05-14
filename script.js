function ChangeBg(){
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    var screenwidth = screen.width;
    if(scrollValue <200 || screenwidth >1024){
        navbar.style.background = "transparent";
        navbar.style.border = "0px solid black"
        navbar.style.margin = "0px";
        
    }else{
        navbar.style.background = "#f8f9fa";
        navbar.style.border = "2px solid #190844"
        navbar.style.margin = "10px 40px";
    }
    console.log(scrollValue);
}

window.addEventListener('scroll', ChangeBg);