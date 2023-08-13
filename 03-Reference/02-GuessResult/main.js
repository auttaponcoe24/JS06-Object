// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // * false เพราะ user และ admin เป็น obj ที่เป็นคนละที่อยู่กัน ถึงแม้ ค่าใน obj จะเหมือนกัน log ออกมาเหมือนกัน แต่เป็นคนละที่อยู่กัน
// ```