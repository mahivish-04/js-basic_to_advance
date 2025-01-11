let a = prompt("enter first number : ");
let b = prompt("enter second number : ");

console.log("1. addition \n 2.subtraction \n 3.multiplication\n 4.division \n");

let choice = prompt("enter your choice");

switch(choice){
 case 1 :
      console.log("addition is : " , a+b);
 break;

 case 2 :
     console.log("subtraction is : " , a-b);
 break;

 case 3 :
     console.log("multiplication  is : " , a*b);
 break;

 case 4 : 
     console.log("division  is : " , a/b);
 break;

 default: 
     console.log("incorrect choice entered");
 break;
}