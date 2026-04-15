// . Random Quote Generator: Display a random quote from a local array of objects every time a button is clicked.

const getBtn = document.querySelector("#btn")
const getQuotes = document.querySelector("#quotes")

const quotesIndex = [
    {
     quotes: "one step at a time",
    },
    {
        quotes:"It always seems impossible until it’s done."
    },
    {
        quotes: "The best way to get started is to quit talking and begin doing."
    },
    {
        quotes: "Success is not final, failure is not fatal."
    }, 
    {
        quotes: "Push yourself, because no one else is going to do it for you."
    },
    {
        quotes: "Great things never come from comfort zones."
    },
    {
        quotes: "Dream it. Wish it. Do it."
    },
    {
        quotes: "Stay focused and never give up"
    },
    
];
function displayQuote() {
    getBtn.addEventListener("click", ()=>{
        getQuotes.classList.remove("hidden");

        const randomArray = Math.floor(Math.random() * quotesIndex.length);
        const randomQuote = quotesIndex[randomArray];

        getQuotes.textContent = randomQuote.quotes;

    })
}
displayQuote()
