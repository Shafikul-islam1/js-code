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
