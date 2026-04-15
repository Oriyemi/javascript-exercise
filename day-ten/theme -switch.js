// Theme Switcher: Implement a toggle that adds / removes a.dark - theme class to the body to swap CSS variables

const getThemeSwitch = document.querySelector("#theme-switch")
const body = document.body;

getThemeSwitch.addEventListener("click", () => {
   
    body.classList.toggle("dark-theme")
})