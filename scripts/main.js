menuIcon = document.querySelector(".icon-menu");
menu = document.querySelector(".menu");
nav = document.querySelector(".nav");
links = document.querySelectorAll(".nav-link");
let active = false;
menuIcon.addEventListener("click",()=>{
    if(!active){
        menu.style.cssText = "right:0;transition:.5s;";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        active=true;
    }else{
        menu.style.cssText = "right:-50rem;transition:.6s;";
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
        active=false;
    }
});

links.forEach(link=>link.addEventListener("click", ()=>{
    menu.style.cssText = "right:-50rem;transition:.6s;";
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
    active=false;
}));
