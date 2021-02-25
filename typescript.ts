//##Types
String let custom erName: string= "John Doe";

Number let price: number = 19.95;

Boolean let shipped: boolean = false;

Date let orderDate: Date = new Date(2017, 2, 9);

Any let something: any = "Can be anythi ng";

Enum enum Color {Red, Green, Blue};

Array let cards: string[] = ['Visa', 'Maste rCa rd'];

Null let orderId: number = null;

Tuple let stateT axR ates: [string, number];

Void function log(msg: string): void {
console.log(msg);
}

Const const lives: number = 99;

//##Classes
class OrderLogic {

con str uct or( public order: IOrder) { }
get Ord erT otal(): number {
let sum: number = 0;
for (let orderD etail of
this.o rde r.o rde rDe tails)
{
sum += orderD eta il.p rice;
}
return sum;
}

}

//##Abstract Classes

abstract class Person {
name: string;
mon thl ySa lary: number;
mon thl yBe nefits: number;
abs tract calcSa lary(): number;
}

//## Interfaces
interface IOrderDetail {
pro duc tName: string;
qua ntity: number;
price: number;
ord erDate: Date;
shi pped: boolean;
//O ptional
out OfS tock?: boolean;
//M ethod
cal cTax: (taxRate: number) => number;
}
Interfaces
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//##Optional Parameters

class Util {
log (msg: string, logDate?: Date) {
if (logDate)
con sol e.l og( logDate + ' ' + msg);
else
con sol e.l og(new Date() + ' ' + msg);
}
}

//### Rest Parameters
class Order {
add Ord erD eta ils (...or der Det ails: IOrder Det ail[]) {
}
}

###Inheri tance and Implem enting Interfaces
interface IGPS {
get Loc ation() number;
}
interface ISelfDrive extends IGPS {
dri ve( lat itude: number, longitude: number,
elevation: number) : void;
}
class Vehicle {
make: string;
model: string;
year: number;
}
class FlyingCar extends Vehicle implements ISelfDrive
{
hasGps: boolean;
dri ve( lat itude: number, longitude: number,
elevation: number) {
}
get Loc ati on(): number {
}
}


//##Usage

Installing TypeScript npm npm install -g typescript
Compiling TypeScript tsc somefi le.ts
TypeScript Docs TypeScriptLang.org
Type Definition Files DefinatelyTyped.org

//##Scope/ Mod ifiers

Public (default) public firstName: string;
Protected protected inventory: number;
Private private outOfS tock: boolean;
Read Only readonly pi: number = 3.14159;
Static static log(msg: string) { consol e.l og(msg) };

//##Namespaces

namespace AcmeCorp.Logging {
export class Logger {
static log(msg: string) : void {
con sol e.l og( msg);
};
}
}
/// <re ference path="A cme Cor p.L ogg ing.ts " />
//Alias
import logger = AcmeCo rp.L og gin g.L ogger;
namespace AcmeCo rp.O nl ine Store {
class OrderLogic {
cal cOr der(): number {
log ger.lo g("c alc ulating order");
return 0;
}
}
}
  
// class Inheritance
 class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//12.2.21/shafikul.dev
