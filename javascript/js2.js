// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.") 
// );