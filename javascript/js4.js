// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };
// function multiplyNumeric(menu) {
//     for (key in menu) {
//         if (typeof key === "number") {
//             menu[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// alert(menu.height);
// alert(menu.width);
// alert(menu.title);

// const numbers = [1, 4, 7, 2, 9, 6, 3];

// const evenSum = numbers.reduce((acc, num) => {
//     if(num % 2 === 0){
//         acc += num;
//     }
//     return acc;
//   }, 0);

// console.log(numbers);
// console.log(evenSum);
const words = ["apple", "banana", "kiwi", "strawberry", "mango"];

const longestWord = words.reduce((longest, currentWord) => {
    if (currentWord.length > longest.length){
        longest = currentWord;
    }
    return longest;
  }, "");

console.log(longestWord);