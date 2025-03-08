// const myText = "I am a string";
// function changeString(newString){
//     return myText.replace("string", newString);
// }

// console.log(changeString('human'));



// const lotsOfDecimal = 1.766584958675746364;
// console.log(lotsOfDecimal);
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// console.log(twoDecimalPlaces);

// function favoriteAnimal(animal) {
//     return animal + " is my favorite animal!"
// }

// console.log(favoriteAnimal('Goat'))

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});
