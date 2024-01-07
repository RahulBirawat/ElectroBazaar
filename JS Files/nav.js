let menu_btn = document.querySelector(".menu_bar img");
let nav_bar = document.querySelector(".nav_bar");
let nav_headings = document.querySelector("nav");
let nav_btns = document.querySelector(".btns");
let dummy = document.querySelector(".dummy");
let logo = document.querySelector(".logo");
let close_btn = document.querySelector(".close_icon");
console.log(close_btn);
menu_btn.addEventListener("click",()=>{
    nav_bar.style.height = "100vh";
    nav_bar.style.width = "100%";
    nav_bar.style.backgroundColor = "white";
    nav_bar.zIndex = "100";
    nav_bar.style.display = "flex";
    nav_bar.style.justifyContent = "center";
    nav_bar.style.alignItems = "center";
    nav_bar.style.flexDirection = "column";
    logo.style.display = "none";
    menu_btn.style.display = "none";
    nav_headings.style.display = "flex";
    nav_headings.style.justifyContent = "center";
    nav_headings.style.alignItems = "center";
    nav_headings.style.flexDirection = "column";
    nav_btns.style.display = "flex";
    nav_btns.style.justifyContent = "center";
    nav_btns.style.alignItems = "center";
    nav_btns.style.flexDirection = "column";
    nav_bar.style.position = "fixed";
    nav_bar.style.top = "0";
    nav_bar.style.left = "0";
    close_btn.style.display = "block";
});
close_btn.addEventListener("click",()=>{
    nav_bar.style.height = "auto"; 
    nav_bar.style.width = "auto"; 
    nav_bar.style.backgroundColor = "white"; 
    nav_bar.style.display = "flex"; 
    nav_bar.style.justifyContent = "space-between"; 
    nav_bar.style.alignItems = "center"; 
    nav_bar.style.flexDirection = "row"; 
    logo.style.display = "block"; 
    menu_btn.style.display = "block"; 
    nav_headings.style.display = "none";
    nav_btns.style.display = "none"; 
    close_btn.style.display = "none"; 
    nav_bar.style.position = "relative";
    nav_bar.style.top = "0.3rem";
    nav_bar.style.left = "0";
});
