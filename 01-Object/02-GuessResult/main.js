// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * obj ของ user
user = {};
console.log(user); // ** error เพราะ user ประกาศชนิกของตัวแปร เป็น const ซึ่งไม่สามารถ เปลี่ยนค่าได้

// ```
