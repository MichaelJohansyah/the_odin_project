// // let menu = {

// //     width: 200,
// //     height: 300,
// //     title: "My menu",
// // };
// // function multiplyNumeric(menu) {
// //     for (key in menu) {
// //         if (typeof key === "number") {
// //             menu[key] *= 2;
// //         }
// //     }
// // }

// // multiplyNumeric(menu);

// // alert(menu.height);
// // alert(menu.width);
// // alert(menu.title);

// // const numbers = [1, 4, 7, 2, 9, 6, 3];

// // const evenSum = numbers.reduce((acc, num) => {
// //     if(num % 2 === 0){
// //         acc += num;
// //     }
// //     return acc;
// //   }, 0);

// // console.log(numbers);
// // console.log(evenSum);
// const words = ["apple", "banana", "kiwi", "strawberry", "mango"];

// const longestWord = words.reduce((longest, currentWord) => {
//     if (currentWord.length > longest.length){
//         longest = currentWord;
//     }
//     return longest;
//   }, "");

// console.log(longestWord);

// 

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// function copySorted(arr){
//   return arr.slice().sort();
// }

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(names => ' '+ names.name);

alert( names ); // John, Pete, Mary