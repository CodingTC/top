// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement("p");

redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";

content.appendChild(redPara);

const blueH3 = document.createElement("h3");

blueH3.textContent = "Hey I'm blue!";
blueH3.style.color = "blue";
content.appendChild(blueH3);

const newDiv = document.createElement("div");

newDiv.classList.add("newContainer");

newDiv.setAttribute("style", "border: 3px solid black")
newDiv.style["background-color"] = "pink";


const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a div";
newDiv.appendChild(h1InDiv);

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO";
newDiv.appendChild(pInDiv);

container.appendChild(newDiv);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});


btn.addEventListener("click", function (e) {
  console.log(e.target);
});


btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
