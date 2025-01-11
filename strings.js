let str = "Mahi Vishwakarma";

console.log(str.length);

for( let i =0;i<= str.length ; i++){
    console.log(str[i]);
}

// template literals
let special_string = `this is a template literal`;

console.log(typeof special_string);

let obj={
    name : "pen",
    price: 10,
};

let output = `the cost of ${obj.name} is ${obj.price}`;
console.log(output);

// string methods
str2 = str.toUpperCase;
console.log(str2);
str3 = str.toLowerCase
console.log(str3);

console.log(str.slice(2,9));

console.log(str.charAt(7));

// generate username

let user_name = prompt("enter username: ");

username_generated =`@${user_name}`+ user_name.length ;
console.log(username_generated);