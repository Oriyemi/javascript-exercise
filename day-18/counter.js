// Counter App: Create a number display with three buttons: Increase, Decrease, and Reset.

let counter = 0
const getAddBtn = document.querySelector("#addBtn");
const getSubstractBtn = document.querySelector("#substractBtn");
const getDisplay = document.querySelector("#counter");
const getResetBtn = document.querySelector("#resetBtn");


getAddBtn.addEventListener("click", () => {
    counter ++;
    getDisplay.innerText = counter;
});

getSubstractBtn.addEventListener("click", () => {
    counter --;
    getDisplay.innerText = counter;
    
});

getResetBtn.addEventListener("click", () => {
    getDisplay.innerText = 0;
});