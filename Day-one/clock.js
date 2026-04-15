/*  
7.  Tabbed Content: Build a UI where clicking different buttons swaps out the visible content block without page reloads.
8.  Form Validator: Trigger error messages if an email is missing an @ or if a password is under 8 characters upon submission.
9.  Review Carousel: Create a "card" containing a profile pic and text; add "Left" and "Right" buttons to cycle through an array of objects.
10. Theme Switcher: Implement a toggle that adds/removes a .dark-theme class to the body to swap CSS variables.*/
const getClockHours = document.querySelector("#hours")
const getClockMinutes = document.querySelector("#minutes")
const getClockSeconds = document.querySelector("#seconds")
// console.log(getClockHours, getClockMinutes, getClockSeconds)


const updateTime = function () {
    let currentDate=new Date()
    getClockHours.innerHTML = currentDate.getHours()
    getClockMinutes.innerHTML = currentDate.getMinutes()
    getClockSeconds.innerHTML=currentDate.getSeconds()
    console.log("faith just called me")
    
    
}
setInterval(() => {
    updateTime()
},1000)




