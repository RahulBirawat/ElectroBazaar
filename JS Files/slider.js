let arr = document.querySelectorAll(".slider .image");
let curr = 0;
let next = 1;
let prev = 4;

let back_btn = document.querySelector(".back_btn img");
let next_btn = document.querySelector(".next_btn img");

next_btn.addEventListener("click", () => {
    arr[curr].style.display = "none";
    arr[next].style.display = "block";

    curr = (curr + 1) % 5;
    next = (next + 1) % 5;
    prev = (prev + 1) % 5;
});

back_btn.addEventListener("click", () => {
    arr[curr].style.display = "none";
    arr[prev].style.display = "block";

    curr = curr === 0 ? 4 : curr - 1;
    next = next === 0 ? 4 : next - 1;
    prev = prev === 0 ? 4 : prev - 1;
});
