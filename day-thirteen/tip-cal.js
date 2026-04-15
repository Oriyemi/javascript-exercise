// . Tip Calculator: Create inputs for "Bill Amount," "Service Quality %," and "Number of People" to output a "Total per Person."
const getBillInput = document.querySelector("#bill-input");
const getTipPercentageInput = document.querySelector("#tip-input");
const getNumOfPersonInput = document.querySelector("#spilt-num-input")
const btn = document.querySelector("#btn");



// convertion to string function
function convertBillInputToStr() {
    const value = getBillInput.value;
    const num = parseInt(value);
    return num;
}
function convertTipInputToStr() {
    const tipValue = getTipPercentageInput.value;
    const tipNum = parseInt(tipValue);
    return tipNum;
}
function convertTotalToStr() {
    const total = getNumOfPersonInput.value;
    const totalNum = parseInt(total);
    return totalNum;
}

function calculateTip() {
    const bill = convertBillInputToStr();
    const tip = convertTipInputToStr();
    const people = convertTotalToStr();
    

    const totalAmount = bill * (tip / 100);

    const totalBill = bill + totalAmount;
    
    const perPerson = totalBill / people;

    document.querySelector(".perPerson").textContent =
        "Each person pays: " + perPerson;



}
btn.addEventListener("click", calculateTip);