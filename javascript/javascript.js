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

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//     output.textContent = `You pressed "${event.key}".`;
// });

// function min(a,b){
//     if (a < b){
//         return a;
//     }
//     else if (a > b ){
//         return b;
//     }
//     else{
//         return a;
//     }
// }

// alert(min(3,3));

// function pow(a,b){
//     return a**b;
// }

// alert(pow(2,7));

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

function add7(a){
  return a + 7;
}

function multiply(a,b){
  return a * b;
}

function capitalize(string){
  return string[0].toUpperCase();
}

function lastLetter(string){
  return string[(string.length) - 1];
}

console.log(capitalize("striung"));
console.log(lastLetter("abcd"));