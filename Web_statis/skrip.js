alert("Welcome to the RCtecture")
function scrollToElement(elementSelector, instance= 0){
    const elements= document .querySelectorAll (elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: "smooth" });
    }    
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener("click",()=>{
    scrollToElement(".header");
});

link2.addEventListener("click",()=>{
    scrollToElement(".Portofolio");
});
link3.addEventListener("click",()=>{
    scrollToElement(".about");
});
link4.addEventListener("click",()=>{
    scrollToElement(".contact");
})

const menu = document.querySelector(".navbar #menu");
const nav = document.querySelector(".navbar .nbar");

menu.addEventListener("click", function() {
    nav.classList.toggle("active")
})