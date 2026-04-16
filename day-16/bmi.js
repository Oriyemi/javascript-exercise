// BMI Calculator: Take height and weight inputs, calculate the index, and return a text - based health result.
const btn = document.querySelector("#calcBtn");
const result = document.querySelector("#result");
const getHeight = document.querySelector("#height");
const getWeight = document.querySelector("#weight");


function convertWeightToStr() {
    const value = getWeight.value;
    const num = parseFloat(value);

    return num;
};
function convertHeightToStr() {
    const value = getHeight.value;
    const num = parseFloat(value);

    return num;
};

function calculateBmi() {
    const height = convertHeightToStr();
    const weight = convertWeightToStr();
    const bmi = weight / (height * height);
    const result = bmi;
    document.querySelector(".result").textContent =
        "Each person BMI: " + result;
}
btn.addEventListener("click", calculateBmi);

