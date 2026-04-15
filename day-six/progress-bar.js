// //**Progress Bar: Create a bar at the top of the page that fills from 0% to 100% based on how far the user has scrolled. */ 


const getFillScroll = document.querySelector("#fill-scroll");
const updateProgressBar = () => {
    const scrolled = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = (scrolled / totalHeight) * 100;

    getFillScroll.style.width = percentage + `%`;


};
window.addEventListener('scroll', updateProgressBar); 
updateProgressBar()