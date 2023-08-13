console.log("Method and this keyword");


// ######################################
// ########## 1. Intro Method
// ######################################

// Object === Collection of preperities and/or method
// each record => called property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Object
// function devWebsite () {
//     console.log("I'm working");
// }

// function meeting () {
//     console.log("I'm meeting")
// }

// function sayHi () {
//     console.log("Hi");
// }

// const programmer = {
//     name: 'Auttapon',
//     age: 30,
//     dev: devWebsite,
//     meet: meeting,
//     say: sayHi,
// };

// property
// Syntax <obj>.<key>
// console.log(programmer.name);

// method
// Syntax : <obj>.<method>()
// programmer.dev();
// programmer.meet();
// เพิ่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน
// programmer.say();


// ######################################
// ########## 2. Alternative Syntax
// ######################################

// let name = 'John';
// const programmer = {
    // name, // property shorthand
    // age: 30,
    // dev: function () {
    //     console.log("i'm working");
    // },
    // method shorthand
//     meet: () => console.log("i'm meeting"),
//     sleep() {
//         console.log("i'm sleeping");  
//     },
// };

// programmer.dev()
// programmer.meet()
// programmer.sleep()

// Mini-Lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติของตัวเอง 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : namedFunction
// key : anonymous FN
// key : arrow FN
// key : shorthand FN

// let user = {
//     name: "Auttapon",
//     hair: 'Black',
//     eye: 'Brown',
//     myEx: ['Jane', 'John'],
//     sport: playSport,
//     sleepAllDay: function () {
//         console.log("Sleep");
//     },
//     eatAllNight: (menu) => console.log(`Eating ${menu} everying!!!`),
//     focus(task) {
//         console.log(`I'm working on ${task} Focus mode`);
//     },
    
// }

// function playSport(play) {
//     console.log(`Playing ${play}`);
// }

// user.sport("football");
// user.sleepAllDay();
// user.eatAllNight('TAX');
// user.focus('javascript');



// ######################################
// ########## 3. Intro OOP
// ######################################

// OOP : Object Oriented Program

// const car = {
//     brand: 'Tesla',
//     model: 'X',
//     speed: 80,
//     drive: () => console.log("driveing"),
//     'auto pilot' : () => console.log("self driveing"),
// };

// console.log(car.brand, car.model)

// Caller.Method
// car.drive();
// car['auto pilot'];

// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,

// };

// let result1 = calculator.sum(7, 4);
// console.log(result1);
// let result2 = calculator.minus(7, 4);
// console.log(result2);

// console.log(car.speed)
// car.speed = calculator.sum(car.speed, 20);
// console.log(car.speed)


// ######################################
// ########## 4. This Keyword
// ######################################

// JS Keyword : if, else, for, while, do, switch, this
// 

// const user = {
//     name: 'codecamp',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld: function () {
//         console.log(this); 
        // this == user , this.age == user.age
//         this.age++;
//     },
// };

// user.sayHi();
// user.name = 'software park';
// console.log(user.name)
// user.sayHi();

// console.log(user.age);
// user.growOld();
// console.log(user.age);

// Q : ค่าของ This ถูก Solve ค่าตั้งแต่ตอนที่เขียน function รึเปล่า ?
// A : ไม่
// function dev (feature) {
//     console.log(`${feature} feature developed by ${this.name}`);

// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// };

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// };

// A : this ถูก solve ตอนเรียกใช้ Method
// Caller.method => this == Caller == Object before the dot
// Checkpoint-1 : this == object ที่เรียกใช้ method
// programmer1.develop("Login");
// programmer2.develop('Register');

// ######################################
// ########## 4. Execution Context == Caller
// ######################################

// Global(Browser) : window object

// window.alert(`i'm Global`);
// this.alert(`i'm Global this`);
// alert(`i'm execute in window`);

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
// function sayHi(){
   // console.log(this); // window
// }

// Execute Context = Window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context

var name = 'codecamp'
function sayHello () {
    console.log(this.name);
}
// const sayHello = () => console.log(this.name); // error

// Window Caller
sayHello();
window.sayHello();

const user = {
    name: 'John',
    say: sayHello, // ประกาศแบบ Declaration
    scream: () => {
        console.log(`scream by ${this.name}`)
    },
    srcm: function () {
        console.log(`scream by ${this.name}`)
    },
};

// user Caller
user.say();

// this == Object Caller
// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถในการสร้าง contaxt
// Loose Context => Chain to Window
user.scream(); // don't use this keyword with arrow function
user.srcm();