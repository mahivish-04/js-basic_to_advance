function myfunction(){
    console.log("hello");
}

myfunction();
// // sum of two numbers
function sum(x, y){
    return x + y;
}

console.log(sum(4, 7));

// // arrow function

const arrow_sum = (a,b) =>{
    return a+b;
}

console.log(arrow_sum(9,8));

// take string as input and return vowels in string

function findvowels(){
    let s = prompt("enter a string: ");

    for(let i =0 ; i<s.length; i++){
        if(s[i] == "a" || s[i]== "e" || s[i] == "i" || s[i]=="o" || s[i]=="u" ){
            console.log(s[i]);
        }
    }
}

findvowels();

// foreach loop in arrays

let arr =[ 1, 2, 3, 4, 5, 6];

arr.forEach(function print(val){
    console.log(val);  
});

// print square of numbers using foreach loop

let new_a = [3,7,2,9,8,10];

new_a.forEach(function square(val){
     console.log(val*val);
});

// map
let num =[1, 3, 5, 7];

num.map((val)=>{
    console.log(val);
});


let newarr = num.map((val)=>{
    return val*val;
});

console.log(newarr);

// filter
let new1 = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

let evenarr = new1.filter((val)=>{
    return val % 2 == 0; 
})

// reduce
let a =[9,8,7,3,2];

const output = a.reduce((res,curr)=>{
    return res + curr;
});

// filter put marks of student
let mark_student = [98, 95, 76, 88, 55];

let topper = mark_student.filter((val)=>{
    return val> 90;

});
console.log(topper);

// input from user to create an array and perform operations

let n = prompt("enter a number:");
let arr_n = [];

for(let i=1; i<=n ;i++){
    arr[i-1] = i;
}

let sum_ofarr = arr_n.reduce((prev, next) => {
    return prev + next;
});
console.log(sum_ofarr);

let product = arr_n.reduce((prev, next) => {
    return prev*next;
});
console.log(product);