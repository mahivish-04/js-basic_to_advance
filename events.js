let btn2 = document.querySelector("#btn2");

btn2.onclick = () => {
    console.log("btn2 was clciked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}

//event listener
 btn2.addEventListener("click", () =>{
      console.log("clicked!!!!");
 });

//  toggle button
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click" , () => {
   if(currMode === "light"){
   currMode = "dark";
   body.classList.add("dark");
   }
   else{
    currMode = "light";
    body.classList.add("light");
   }

   console.log(currMode);
});