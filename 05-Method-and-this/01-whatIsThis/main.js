// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // * John เพราะ this.name เป็นการ log ข้อมูล name ใน obj ที่ตัวมันอยู่
// ```