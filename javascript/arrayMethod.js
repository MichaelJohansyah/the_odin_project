// 1. Translate border-left-width to borderLeftWidth
// function camelize(text) {
//     return text
//         .split("-")
//         .map((text, index) => {
//             if (index == 0) {
//                 return text;
//             } else {
//                 return text[0].toUpperCase() + text.slice(1);
//             }
//         })
//         .join("");
// }
// console.log(camelize("background-color"));

// 2. Filter range
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b) {
//     return arr.filter((item) => {
//         if (item >= a && item <= b) {
//             return item;
//         }
//     });
// }

// alert(filtered); // 3,1 (matching values)
// alert(arr); // 5,3,8,1 (not modified)

// 3. Filter range "in place"
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// function filterRangeInPlace(arr, a, b){
//     for(let i = 0; i < arr.length; i++){
//         let item = arr[i];
//         if (item < a || item > b){
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// alert( arr ); // [3, 1]

// 4. Sort in decreasing order
// 5. Copy and sort array
// 6. Map to names
// 7. Map to objects
// 8. Sort users by age
// 9. Shuffle an array
// 10. Get average age
// 11. Filter unique array members
// 12. Create keyed object from array
