const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const crewMember1 = document.querySelector(".crew-m1");
const crewMember2 = document.querySelector(".crew-m2");
const crewMember3 = document.querySelector(".crew-m3");
const crewMember4 = document.querySelector(".crew-m4");

const img = document.querySelector(".img");

btn1.style.backgroundColor = "white";

btn1.addEventListener("click", function(){
    img.src = "assets/crew/image-douglas-hurley.png"
    crewMember1.style.display = "block";
    crewMember2.style.display = "none";
    crewMember3.style.display = "none";
    crewMember4.style.display = "none";

    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
})

btn2.addEventListener("click", function(){
    img.src = "assets/crew/image-mark-shuttleworth.png";
    crewMember2.style.display = "block";
    crewMember1.style.display = "none"
    crewMember3.style.display = "none";
    crewMember4.style.display = "none";

    btn2.style.backgroundColor = "white";
    btn1.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
})

btn3.addEventListener("click", function(){
    img.src = "assets/crew/image-anousheh-ansari.png";
    crewMember3.style.display = "block";
    crewMember1.style.display = "none"
    crewMember2.style.display = "none"
    crewMember4.style.display = "none"

    btn3.style.backgroundColor = "white";
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
})

btn4.addEventListener("click", function(){
    img.src = "assets/crew/image-victor-glover.png";
    crewMember1.style.display = "none";
    crewMember2.style.display = "none";
    crewMember3.style.display = "none";
    crewMember4.style.display = "block";

    btn4.style.backgroundColor = "white";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn1.style.backgroundColor = "";
});


// Navigation Toggle

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
