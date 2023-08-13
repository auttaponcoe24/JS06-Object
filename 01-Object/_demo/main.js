console.log('learn object')

// DataTypes
// - Primitive : Boolean, Number, String, etc...
// - Non-Primitive : Object


// ### Object Declaration
// {} = stand for Object / Scope
// { record_1, record_2, record_3,...}
// each record => <key_name>:<value>
// <value> any Datatype
// <key_name> datatype : string
// record === property (คุณสมบัติ, สิ่งที่มี) == key-value pair


let user = {
    firstName: 'Auttapon',
    lastName: 'Chucheun',
    age: 19,
    isAdmin: true,
    'like human': true,
};

console.log(user);


// ### ACCESS, MODIFY, DELETE
// Every action NEED <KEY_NAME> !!
// Dot Notation <obj>.<key_name>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// GET, POLL, READ

console.log(user.firstName);
console.log(user.firstName === 'Auttapon');
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user['like human']);

// MODIFY, UPDATE
// Syntex : <obj>.<old_key> = newValue
user.firstName = 'NeungCoE';
console.log(user.firstName)
user.age = 25;
user.age++;
console.log(user.age)

// ADD
// Syntex : <obj>.<new_key> = newValue
user.address = 'Hatyai'
console.log(user.address);

// DELETE
// Syntex : delete <obj>.<key_name>
delete user.isAdmin;
console.log(user);

// ### NESTED Object

const employee = {
    fullName: 'John Doe',
    salary: 500,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },
};

// ACCESS
console.log(employee.salary)
console.log(employee.address)
console.log(employee.address.province)


// Prevent Crash !!
// Dot ใช้กับ Object เท่านั้น !! <obj>.<key>
// ห้ามมมมมมมมมม ใช้กับ undifined <undefined>.<key>
// วิธีแก้ optional Chanining => <undefined>?.<key>
console.log(employee.addr)  // undefined
//console.log(employee.addr.province) // error เพราะ undefined.province
console.log(employee.addr?.province) // undefined ไม่ error มี ?
console.log(employee.address?.province) // Bangkok


// ### 4. Check Key ?

const product = {
    id: 227,
    name: 'IPhone',
    price: 50_000,
    // discount: 0.5,
    'is mobile': true,
}
// consolo.log(product.discount); // undefined

// * IN Operator
// ** Syntax : <key_name_string> in <obj> => BOOLEAN
// 'name' in product // => true, false
console.log('name' in product) 
console.log('disconunt' in product) 

// * method hasOwnProperty
// ** Syntax : <obj>.hasOwnProperty(<key_name>) => BOOLEAN

console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));


// ### 5. Bracket Notation []

// Syntzx : <obj>['<key_name_string>']
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// *** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computer key
// Access key-value ผ่านขื่อตัวแปรได้เลย
console.log(product.id)
console.log(product['id'])

// console.log(product.is mobile) crash
console.log(product['is mobile'])

product['name'] = 'Iphone-15';

let aaaa = 'name';
console.log(product[aaaa]) //Iphone-15
console.log(product['name']) //Iphone-15
console.log(product.aaaa) // undefined  <obj>.<key_name>

// property shorthand
let username = 'Codecamp'
let age = 20;
let user = { username, age }