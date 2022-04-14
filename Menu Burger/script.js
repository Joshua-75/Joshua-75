const btn = document.getElementById("btn");
const nav = document.getElementById("nav"); 

// Ecouteur d'événement 

btn.addEventListener("click" , () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});