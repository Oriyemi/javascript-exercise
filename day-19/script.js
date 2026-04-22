//  Pomodoro Timer: Create a 25 - minute countdown that can be paused and reset.
const getTimer = document.querySelector("#timer");
const getStart = document.querySelector("#start");
const getPause = document.querySelector("#pause");
const getReset = document.querySelector("#reset");

let time = 1500;
let timer;

function updateTime() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    getTimer.textContent = min + ":" + sec;
}
getStart.addEventListener("click", () => {
   timer= setInterval(() => {
        time--;
        updateTime()
    }, 1000);
    
       
})
getPause.addEventListener("click", function () {
    clearInterval(timer);
});

getReset.addEventListener("click", function () {
    clearInterval(timer);
    time = 1500;
    updateTime();
});

 


