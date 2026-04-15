/* Modal Window: Create a popup that appears on a button click and disappears when clicking an "X" or the overlay background. */

const getdeleteBtn = document.querySelector("#deleteBtn");
const getpopupModal = document.querySelector("#popupModal");
const getCloseBtn = document.querySelector("#closeBtn");
const getWrapper = document.querySelector("#wrapper")

getdeleteBtn.addEventListener("click", () => {
    getpopupModal.classList.remove("hidden")
})
getCloseBtn.addEventListener("click", function () {
    getpopupModal.classList.add("hidden")
})

getWrapper.addEventListener("click",function () {
    getpopupModal.classList.add("hidden")
})


// getOpenModal.addEventListener("click", () => {
//     getnavigatorModal.classList.remove("hidden");
// });


// getCloseBtn.addEventListener("click", () => {
//     getnavigatorModal.classList.add("hidden");
// });


// getOverlay.addEventListener("click", () => {
//     getnavigatorModal.classList.add("hidden");
// })
