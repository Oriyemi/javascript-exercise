/* Hex Color Flipper: Create a button that generates a random hex code and applies it to the body background.*/
const alphabet = ["A", "B", "C", "D", "E", "F"]

const updateHex = function () {
    const juliet = Math.floor(Math.random() * alphabet.length)
    const faith = Math.floor(Math.random() * 9)
    const yemi = Math.floor(Math.random() * 9)
    const remi = Math.floor(Math.random() * alphabet.length)
    const marvel = Math.floor(Math.random() * 9)
    const sam = Math.floor(Math.random() * alphabet.length)
   
    document.body.style.backgroundColor = "#" + alphabet[juliet] + faith + yemi + alphabet[remi] + marvel + alphabet[sam]
}
updateHex()
console.log(updateHex)