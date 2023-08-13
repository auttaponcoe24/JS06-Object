// บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


// ```js
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * name: 'Pepsi', price: 19, size: '500mL' เพราะ product2 ไปเปลี่ยนค่าใน {} ที่เป็นที่อยู่เดียวกับ product1
console.log(product2); // ** name: 'Pepsi', price: 19, size: '500mL' เพราะ product2 มี object ที่ mem หรือที่อยู่ของ obj เดียวกัน
console.log(product1 === product2); // *** true เพราะ เป็น obj ที่ชี้ไปยังที่อยู่เดียวกัน
// ```