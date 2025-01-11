//array basics

let heros = ["ironman" , "hulk" , "thor" , "batman" ];

console.log(heros);
console.log(heros.length);//property

// average of student marks

let marks = [85, 97, 44 ,37 , 76 , 60];
let sum = 0;

for(let i = 0 ; i<marks.length ; i++){
    sum = sum + marks[i];
}

let avg = sum / marks.length;

console.log(`the average of student marks is ${avg}`);

// find discounted price 

let price = [250 , 645 , 300 , 900 , 50];

for( let i=0; i<price.length; i++){
        let discount = price[i] / 10;
        price[i] -= discount;
        console.log(price[i]);
    }

// array methods
let groceries = ["rice" , "dal" , "oil" ,"vegetables"];

console.log(groceries);

groceries.push("chips" , "snacks");

 console.log(groceries);

 groceries.pop("snacks");

 console.log(groceries);
 console.log(groceries.toString);

 console.log(heros.concat(groceries));

 console.log(groceries.shift);
 console.log(groceries.unshift("mango"));

 console.log(groceries.slice(1,4));

 console.log(groceries.splice(0 , 3 , 4));


//  practice question
 let companies = ["bloomberg" , "microsoft" , "uber" , "google" , "ibm" , "netflix"];

console.log(companies.shift);
console.log(companies);

companies.splice(2, 1, "ola");

console.log(companies);

companies.push("amazon");

console.log(companies);

 
 
 


