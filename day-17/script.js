//  Filtering Gallery: Create a set of buttons(e.g., "Nature," "City") that show / hide specific image cards based on data attributes.

const getNatureBtn = document.querySelector("#nature");
const getCityBtn = document.querySelector("#city");
const getNatureCard = document.querySelectorAll(".card-nature");
const getCityCard = document.querySelectorAll(".card-city")


getNatureBtn.addEventListener("click", () => {
    getNatureCard.forEach(card => {
        card.style.display = "block";
    })
    getCityCard.forEach(card => {
        card.style.display = "none";
    });
    
    
})

getCityBtn.addEventListener("click", () => {
    getNatureCard.forEach(card => {
        card.style.display = "none";
    })
    getCityCard.forEach(card => {
        card.style.display = "block";
    });
})