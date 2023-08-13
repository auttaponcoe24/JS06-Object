// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator () {
    let num1, num2;
    this.read = function() {
        this.num1 = +prompt('Enter Number 1 : ');
        this.num2 = +prompt('Enter Number 2 : ');
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
};

const calc1 = new Calculator();
console.log(calc1); // obj