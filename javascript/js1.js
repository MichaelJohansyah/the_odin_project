const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey! I'm red!"
paragraph.style.color = "red";

const heading3 = document.createElement("h3");
heading3.textContent = "I’m a blue h3!";
heading3.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.textContent = "aman ka"
newDiv.style.backgroundColor = "pink";
newDiv.style.borderStyle = "solid";
newDiv.style.borderColor = "black";
newDiv.classList.add("newDiv");

const newDivH1 = document.createElement("h1");
newDivH1.textContent = "I'm in a div";

const newDivp = document.createElement("p");
newDivp.textContent = "ME TOO";

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(newDiv);
newDiv.appendChild(newDivH1);
newDiv.appendChild(newDivp);
