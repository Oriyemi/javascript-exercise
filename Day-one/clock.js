
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




