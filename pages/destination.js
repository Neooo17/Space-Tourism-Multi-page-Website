const moon = document.querySelector(".lab1");
const mars = document.querySelector(".lab2");
const europa = document.querySelector(".lab3");
const titan = document.querySelector(".lab4");

const moonItem = document.querySelector(".moon")
const marsItem = document.querySelector(".mars")
const europaItem = document.querySelector(".europa")
const titanItem = document.querySelector(".titan")

const img = document.querySelector(".dest img")

moon.style.borderBottom = "2px solid white"

mars.addEventListener("click", function (){
    img.src = "assets/destination/image-mars.png";
    marsItem.style.display ="block";
    moonItem.style.display = "none";
    europaItem.style.display = "none";
    titanItem.style.display = "none";

    mars.style.borderBottom = "2px solid white";
    moon.style.borderBottom = "none";    
    europa.style.borderBottom = "none";    
    titan.style.borderBottom = "none";    

})

moon.addEventListener("click", function (){
    img.src = "assets/destination/image-moon.png";
    moonItem.style.display = "block";
    marsItem.style.display = "none";
    europaItem.style.display = "none";
    titanItem.style.display = "none";

    moon.style.borderBottom = "2px solid white";
    mars.style.borderBottom = "none";    
    europa.style.borderBottom = "none";    
    titan.style.borderBottom = "none";

})

europa.addEventListener("click", function(){
    img.src = "assets/destination/image-europa.png";
    europaItem.style.display = "block";
    moonItem.style.display = "none";
    marsItem.style.display = "none";  
    titanItem.style.display = "none";

    europa.style.borderBottom = "2px solid white";
    moon.style.borderBottom = "none";    
    mars.style.borderBottom = "none";    
    titan.style.borderBottom = "none";
})

titan.addEventListener("click", function(){
    img.src = "assets/destination/image-titan.png";
    titanItem.style.display = "block";
    moonItem.style.display = "none";
    marsItem.style.display = "none";
    europaItem.style.display = "none";

    titan.style.borderBottom = "2px solid white";
    moon.style.borderBottom = "none";    
    europa.style.borderBottom = "none";    
    mars.style.borderBottom = "none";
})


//navigation toggle

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute("data-visible");
    // console.log(visibility);
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
       primaryNav.setAttribute("data-visible", false);
       navToggle.setAttribute("aria-expanded", false);
    }
})




