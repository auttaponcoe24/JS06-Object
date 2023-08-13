// ############# 3-multyplyNumeric
// const multyplyNumeric = (obj, num) => {
//     for (let key in obj) {
        // console.log(key)
//         let value = obj[key];
//         if(typeof value === 'number'){
            // console.log(value, num)
            // update value

            // obj[key] = obj[key] * num
            // obj[key] = value * num
//             obj[key] *= num;          
            // obj[key]
//         }
//         console.log(value);
//     }
// };

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'my menu',
// };

// multyplyNumeric(menu, 10)
// console.log(menu)

// let menuObj = {
//     width: 200,
// };

// menuObj.width


// ############# 5-FriutsBasket

// INIT
// แบบ1
// const fruits = {};

 // ACCEPT INPUT
// let key = prompt("Enter Fruit");
// let value = +prompt("Enter Quantity");

// UPATE FRUITS
// fruits.key = value // {key : 10}

// fruits['apple'] = value; // {apple : 10}

// if(value == 1) {
//     fruits[key] = value;
// } else if (value > 1) {
//     fruits[`${key}s`] = value;
// }

// console.log(fruits);

// แบบ 2
const TERMINATE = 'stop'
const fruits = {};

// ACCEPT INPUT
let key;
let value;

do {

    key = prompt("Enter Fruit");
    value = +prompt("Enter Quantity");

    if(value == 1) {
        fruits[key] = value;
    } else if (value > 1) {
        fruits[`${key}s`] = value;
    }

} while (key != TERMINATE && value != TERMINATE);



console.log(fruits);

