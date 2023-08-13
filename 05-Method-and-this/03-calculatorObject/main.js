// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// ```js
let calculator = {
  // ... your code ...
    x: null,
    y: null,
  read: function () {
    this.x = +prompt("Enter Number X ?");
    this.y = +prompt("Enter Number Y ?");
  },
  sum: function () {
    return this.x + this.y;
  },
  mul: function () {
    return this.x * this.y;
  },
};

calculator.read();
// console.log(calculator.x, calculator.y)
alert(calculator.sum());
console.log(calculator.sum())
alert(calculator.mul());
// ```

