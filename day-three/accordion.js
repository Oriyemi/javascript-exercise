/*3.  Accordion Menu: Build a vertical menu where clicking a header expands a hidden text panel.
*/
const getNameForm = document.querySelector("#name")
const getAddressForm = document.querySelector("#address")
const getJobForm = document.querySelector("#job")
const getReligionForm = document.querySelector("#religion")

const getNameParagraph = document.querySelector(".namep")
const getAddressParagraph = document.querySelector(".addressp")
const getJobParagraph = document.querySelector(".jobp")
const getReligionParagraph = document.querySelector(".religionp")

getNameForm.addEventListener("click", () => {
    getNameParagraph.classList.toggle("hidden")
})
getAddressForm.addEventListener("click", () => {
    getAddressParagraph.classList.toggle("hidden")
})
getJobForm.addEventListener("click", () => {
    getJobParagraph.classList.toggle("hidden")
})
getReligionForm.addEventListener("click", () => {
    getReligionParagraph.classList.toggle("hidden")
})