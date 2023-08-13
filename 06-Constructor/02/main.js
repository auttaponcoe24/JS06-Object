// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator () {
    let num;
    this.currentValue = 0;
    this.read = function () {
        this.num = +prompt("Enter startingValue :");
        return this.currentValue += this.num;
    };
    this.show = function () {
        return alert(this.currentValue);
    };
}

const acc1 = new Accumulator();