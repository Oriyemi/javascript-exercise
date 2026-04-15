// . Dice Roller: Create a button that generates two numbers between 1–6 and displays the corresponding images or text.


const diceImg = [
    {
        image:"/src/images/dice 1.jpg",
        text: "dice 1",
 
    },
    {
        image: "day-15/dice 2.webp",
        text: "dice 2",

    },
    {
        image: "src/images/dice 3.jpg",
        text: "dice 3",

    },
    {
        image: "src/images/dice 4.jpg",
        text: "dice 4",

    },
    {
        image: "src/images/dice 5.jpg",
        text: "dice 5",

    },
    {
        image: "src/images/dice 6.jpg",
        text: "dice 6",

    },

]
const rollBtn = document.getElementById('rollBtn');

const dice1Img = document.querySelector('#dice1 img');
const dice1Text = document.querySelector('#dice1 p');

const dice2Img = document.querySelector('#dice2 img');
const dice2Text = document.querySelector('#dice2 p');

rollBtn.addEventListener('click', () => {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    dice1Img.src = diceImg[roll1].image;
    dice1Text.textContent = diceImg[roll1].text;

    dice2Img.src = diceImg[roll2].image;
    dice2Text.textContent = diceImg[roll2].text;
});
