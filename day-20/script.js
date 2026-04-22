//  Search Filter: Build a list of items and a text input; as the user types, hide items that don't match the string.
const getInput = document.querySelector("#input");
const getList = document.querySelectorAll(" li");

getInput.addEventListener("input", function () {
    const inputValue = getInput.value.toLowerCase();

    getList.forEach((item) => {
        const text = item.textContent.toLowerCase();

        if (text.includes(inputValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
})