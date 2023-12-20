const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const tech1 = document.querySelector(".tech-1");
const tech2 = document.querySelector(".tech-2");
const tech3 = document.querySelector(".tech-3");


btn1.addEventListener("click", function(){
    tech1.style.display = "flex";
    tech2.style.display = "none";
    tech3.style.display = "none";

    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    
    btn1.style.color = "black";
    btn2.style.color = "";
    btn3.style.color = "";

})

btn2.addEventListener("click", function(){
    tech1.style.display = "none";
    tech2.style.display = "flex";
    tech3.style.display = "none";
    
    btn2.style.backgroundColor = "white";
    btn1.style.backgroundColor = "";
    btn3.style.backgroundColor = "";

    btn2.style.color = "black"
    btn1.style.color = "";
    btn3.style.color = "";
})

btn3.addEventListener("click", function(){
    tech1.style.display = "none";
    tech2.style.display = "none";
    tech3.style.display = "flex";

    
    btn3.style.backgroundColor = "white";
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "";

    btn3.style.color = "black"
    btn2.style.color = "";
    btn1.style.color = "";
})

btn1.style.backgroundColor = "white";
btn1.style.color = "black";

// Nagivation toggle

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

