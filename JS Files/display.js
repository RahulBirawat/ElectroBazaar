let mob_btn = document.querySelector("#mob_btn");
let cctv_btn = document.querySelector("#cctv_btn");
let comp_btn = document.querySelector("#comp_btn");
let Changeimage = document.querySelector(".image_services img");
let mobile_div = document.querySelector("#mobile");
let comp_div = document.querySelector("#computer");
let cctv_div = document.querySelector("#cctv");

comp_btn.addEventListener("click",()=>{
    Changeimage.src = "./Images/computeraccesories.jpg";
    cctv_div.style.display = "none";
    mobile_div.style.display = "none";
    comp_div.style.display = "block";
});
mob_btn.addEventListener("click",()=>{
    Changeimage.src = "./Images/mobile.jpg";
    cctv_div.style.display = "none";
    mobile_div.style.display = "block";
    comp_div.style.display = "none";
});
cctv_btn.addEventListener("click",()=>{
    Changeimage.src = "./Images/cctv-accessories.jpg";
    cctv_div.style.display = "block";
    mobile_div.style.display = "none";
    comp_div.style.display = "none";
});
