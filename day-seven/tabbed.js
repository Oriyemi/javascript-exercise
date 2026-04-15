/* Tabbed Content: Build a UI where clicking different buttons swaps out the visible content block without page reloads.*/
const getHomeBtn = document.querySelector("#home-btn");
const getAboutBtn = document.querySelector("#about-btn");
const getContactBtn = document.querySelector("#contact-btn");
const getAddressBtn = document.querySelector("#address-btn"); 

const getHomeCard = document.querySelector(".home-card");
const getAboutCard = document.querySelector(".about-card");
const getContactCard = document.querySelector(".contact-card");
const getAddressCard = document.querySelector(".address-card");

function hideAllCards() {
    getHomeCard.classList.add("hidden");
    getAboutCard.classList.add("hidden");
    getContactCard.classList.add("hidden");
    getAddressCard.classList.add("hidden");
}

getHomeBtn.addEventListener("click", () => {
    hideAllCards();
    getHomeCard.classList.remove("hidden");
});
getAboutBtn.addEventListener("click", () => {
    hideAllCards();
    getAboutCard.classList.remove("hidden");
});
getContactBtn.addEventListener("click", () => {
    hideAllCards();
    getContactCard.classList.remove("hidden");
});
getAddressBtn.addEventListener("click", () => {
    hideAllCards();
    getAddressCard.classList.remove("hidden");
});


