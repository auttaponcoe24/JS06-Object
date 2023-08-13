console.log("Learn Ref.");

// Copied by Value
// Copied by Reference

// PRIMITIVE
let message = 'Hello';
// *** Copied by Value
let word = message;

console.log(message);
console.log(word);

message = 'Hi';
console.log(message);
console.log(word);

// OBJECT
// User เก็บ addredd ของ Literal Object
let user = {
    name: 'John',
    age: 33,
};

// *** Copied by Reference
// assign Adress ของ user ให้กับ employee
let employee = user;
console.log(employee);

user.name = 'Joe';
console.log(employee);

employee.age = 35;
console.log(user);



