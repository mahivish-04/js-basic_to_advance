//print all even numbers from 0 to 100
for( let num = 0 ; num <=100; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}

//guess the correct number

let guessnum = 25;
let usernum = prompt("guess the correct number: ");

while(usernum != guessnum){
    usernum = prompt("you have entered the wrong number , enter the correct number.");
}

console.log("Congratulations , you have entereed the correct answer.");
