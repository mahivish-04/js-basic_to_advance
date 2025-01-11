const student = {
    name: "Mahi",
    age : 19,
    rollno : 68,
    printName : function () {
         console.log("name = " , this.name);
    },
};

const employee = {
    calTax(){
     console.log("tax rate is 10%");
    }
}

const karanArjun = {
    salary : 50000,
    calTax() {
        console.log("tax rate is 20%"); 
    }
};

karanArjun.__proto__ = employee;

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar;
fortuner.setBrand("fortuner");
new lexus = new ToyotaCar;
lexus.setBrand("lexus");

// inheritance
class parent {
    hello() {
        console.log("hello");
    }
 }

 class child extends parent {
    hello(){
        console.log("child class is invodek");
    }
 }

 let obj = new child();

//practice question
let data = "website data";
class user{
   constructor(name , email){
    this.name = name;
    this.email = email;
   }

   viewData(){
    console.log(data);
   }
}

let std1 = new user("Mahi", "Mah12@gmail.com");
let std2 = new user("Anuj", "Anuj12@gmail.com");

class Admin extends user {

    constructor(name , email ){
        super(name , email);
    }
    editData(){
      data = "some new data";
      console.log(data);
    }
}

let admin1 = new Admin("admin" , "Admoin23@gmail.com");