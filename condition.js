 let age = 25;

//  if(age>18){
//     console.log("you are eligible to vote");

//  }

//  if(age<18){
//     console.log("you are not eligible to vote");
    
//  }

if(age > 18){
    console.log(" vote");

}
else{
    console.log("not vote");
}

let num = 10;

if(num % 2 == 0){
    console.log("is even ");
}else{
    console.log("is odd");
}

//else if statement

let mode = "dark";
let color;
if(mode == "dark"){
color ="black";
}
else if(mode == "light"){
    color ="off white";
}
else if( mode = "dim"){
    color = "yellow";
}

else{
    color = "white";
}

console.log(color);

// ternary operator

age>18 ? "adult" : "not adult";

//get input from user  using promptcheck if it is a multiple of 5 or not

let n = prompt("enter a number: ");

if(n % 5 == 0){
    console.log(n, "is a multiple of 5");
}
else{
    console.log(n , "is not a multiple of 5");
}

// grade to students according to score

let score = prompt("enter student score: ");

if( score >= 90 && score<= 100){
    console.log("grade A");
}
else if( score >= 70 && score<= 89){
    console.log("grade B");
}
else if( score >=60 && score <= 69 ){
    console.log("grade C");
}
else if( score >= 50 && score<= 59){
    console.log("grade D");
}
 else if( score >=0 && score<= 49){
    console.log("grade E");
}

else{
    console.log("incorrect score entered");
}