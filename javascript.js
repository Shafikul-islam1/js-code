// #### array sum #####

var arr1=[1,2,3,4,5]
var arr2=[10,20,30,40,50]
var arr3=[2,4,6,8,10]
function arrAdd(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum);
}
arrAdd(arr1);
arrAdd(arr2);
arrAdd(arr3);

// ######     Switch Cases    ######

var date = new Date();
var today = date.getDay();
switch (today){
    case 0:
        console.log('today is sunday');
        break;
    case 1:
        console.log('today is Monday');
        break;
    case 2:
        console.log('today is Tuesday');
        break;
    case 3:
        console.log('today is Wednesday');
        break;
    case 4:
        console.log('today is Thursday');
        break;
    case 5:
        console.log('today is Friday');
        break;
    case 6:
        console.log('today is Saturday');
        break;
    default:
        console.log('not a day');
}



// #######    Functions Rest Parameters ######
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// #####   Spread syntax ########
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

// ######## Closures  ########
function bankAccount(initiabalance){
    var balance = initiabalance;
     return function(){
        return balance;
    }
}
var account =bankAccount(1000);
console.log(account());

// ######## Prototype #########
function Person(name, age){
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    return person;
};
Person.prototype={
    eat(){
        console.log(`Person is eating`)
    },
    sleep(){
        console.log(`Person is sleeping`)
    },
    play(){
        console.log(`Person is playing`)
    }
};
const shafikul=Person("shafikul islam",24);
shafikul.play();
const rubel =Person("rubel islam",25);
rubel.play();

// #up prototype-1

function Person(name, age){
   this.name = name;
    this.age = age;
   
};
Person.prototype={
    eat(){
        console.log(`Person is eating`)
    },
    sleep(){
        console.log(`Person is sleeping`)
    },
    play(){
        console.log(`Person is playing`)
    }
};
const shafikul=new Person("shafikul islam",24);
const rubel = new Person("rubel islam",25);
shafikul.sleep();
rubel.play();
  
// #up prototype-2
class Person{
    constructor(name, age){
         this.name = name;
         this.age = age;
 }
   

    eat(){
        console.log(`Person is eating`)
    }
    sleep(){
        console.log(`Person is sleeping`)
    }
    play(){
        console.log(`Person is playing`)
    }
};

const shafikul=new Person("shafikul islam",24);
const rubel = new Person("rubel islam",25);
shafikul.sleep();
rubel.play();

// ####### Prototype Inheritance ######
function Person(name,age) {// parent class
    this.name = name;
    this.age = age;
}
function Cricketer(name,age,type,country) {// sub class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}
Person.prototype={
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}
Cricketer.prototype=Object.create(Person.prototype);
Cricketer.prototype.constructor=Cricketer;
let shafikul= new Cricketer("shfaikul islam",35,"All rounder","Bangladesh");


console.log(shafikul.eat());

// #### Class Inheritance ####
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
       console.log(`${this.name} is eating`);
    }

}
class Cricket extends Person {
    constructor(name, age,type,country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}
let shafikul=new Cricket("shafikul isam",24,"boller","bangladesh");
console.log(shafikul.age);
shafikul.play();


// #### Property getters and setters ####
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
       console.log(`${this.name} is eating`);
    }

    get setName(){
       return this.name; 
    }
    set setName(name){
        this.name = name;
    }
}
let shafikul= new Person("shfaikul islam",24);
// console.log(shafikul.setName);\\ getters
 shafikul.setName="Rube"; // setters
 console.log(shafikul.name);

// #### Static Methods  ####
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
       console.log(`${this.name} is eating`);
    }
   static isEqualAge(){
       console.log(`my name is shafikul`)
   }
}
let shafikul= new Person("shfaikul islam",24);
Person.isEqualAge();

// JavaScript encapsulation

//call() vs apply() vs bind() vs $.proxy() 
var fn = function(arg1, arg2) {
    var str = '<p>aap ' + this.noot + ' ' + arg1 + ' ' + arg2 + '</p>';
    document.body.innerHTML += str;
};
var context = {
    'noot': 'noot'
};
var args = ['mies', 'wim'];

// Calls a function with a given 'this' value and arguments provided individually.
// Support: everywhere
fn.call(context, args[0], args[1]);

// Calls a function with a given 'this' value and arguments provided as an array
//  (or an array like object).
// Support: everywhere
fn.apply(context, args);

// Creates a new function that, when called, has its 'this' keyword set to the
//  provided value, with a given sequence of arguments preceding any provided
//  when the new function was called.
// Support: ECMAScript >= 5 (thus >= IE9)
var boundFn1 = fn.bind(context, args[0], args[1]);
boundFn1();

// Same as bind()
// Support: same as your jQuery version, available since 1.4
var boundFn2 = $.proxy(fn, context, args[0], args[1]);
boundFn2();

// ##### implicit binding #######
var Person = function(name,age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father:{
            name:'Mr . xx',
            printName: function(){
                console.log(this.name);
            }
        }
    };
};
 var shafikul = Person("shafikul",35);
 shafikul.printName();
 shafikul.father.printName();

// ####### Explicit binding##########
// call()
var printName = function(a1,a2,a3){
    console.log(`${this.name}is ${a1},${a2},${a3}`);
}
var shafikul={
    name:"Shafikul islam",
    age:18
};
var a1="engines";
var a2="program"
var a3="web";

printName.call(shafikul,a1,a2,a3);

// apply()
var printName = function(a1,a2,a3){
    console.log(`${this.name}is ${a1}, ${a2}, ${a3}`);
};

var shafikul = {
    name: "Shafikul islam",
    age: 18,
};
var a1="engineer";
var a2="program"
var a3="web";
var a =[a1, a2, a3];

printName.call(shafikul, a);
