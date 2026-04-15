//* Character Counter: Create a textarea that shows a real-time count of characters used (e.g., "140/280").*/ 
const  textInput = document.querySelector("#textInput");
const counter = document.querySelector("#counter");

textInput.addEventListener("input", ()=>{
    const currentLength = textInput.value.length;
    counter.innerText = currentLength;
});