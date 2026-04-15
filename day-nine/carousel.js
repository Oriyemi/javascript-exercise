/*Review Carousel: Create a "card" containing a profile pic and text; add "Left" and "Right" buttons to cycle through an array of objects.*/
const getImage = document.querySelector("#image")
const getName = document.querySelector("#name")
const getJob = document.querySelector("#job")
const getText = document.querySelector("#text")
const getBtnLeft = document.querySelector("#btn-left")
const getBtnRight = document.querySelector("#btn-right")
/*the next thing is to set the id/index to zero ,*/
let currentId = 0;
/*we want use  function to display the data we store in the array*/
function showReviews(id) {
    const review = reviews[id]
    // in line 12 to the the array of object and call all the all the array of object (reviews)
    getImage.src = review.image
    getName.textContent = review.name
    getJob.textContent = review.job
    getText.textContent = review.text
   
    
}
getBtnLeft.addEventListener("click", () => {
    currentId++  //  increase the currentId by 1 maening move to the next review in the array 
    if (currentId > reviews.length - 1) {
        currentId = 0;
        // this is looping- reviews.length - 1 = last index in the array
        //  If you go past the last review go back to the first review(index 0) 0-1-2-0-1-2
        
    }
    showReviews(currentId) 
    // call the function with the new review at currentId
})
getBtnRight.addEventListener("click", () => {
    currentId-- // decrease currentId
    if (currentId < 0) {
        currentId = reviews.length - 1;
        // this is also looping but backward-2-1-0-2-1-0

    }
    showReviews(currentId)
})



const reviews = [
    {
        image: "/src/images/faith.jpg",
        name: "Faith",
        job: "Web Developer",
        text: "This product is amazing. It really difficult using javascript."
    },
    {
        image: "/src/images/faith.jpg",
        name: "Yochabel",
        job: "Lash Tech",
        text: "Classic and hybrid."
    },
    {
        image: "/src/images/domero.jpg",
        name: "Domero",
        job: "Hair stylist",
        text: "Braiding and styling of hair."
    }
];