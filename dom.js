let newBtn = document.createElement("button");
newBtn.innerText = "click me !";

newBtn.style.backgroundcolor =  "red";

newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Q2

let para = document.querySelector("p");
para.getAttribute("class");

para.classList.add("newclass");