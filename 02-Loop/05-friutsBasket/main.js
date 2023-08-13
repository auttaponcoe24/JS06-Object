// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   // friut[key] = +value
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

const TERMINATE = 'stop'
let friuts = {};
let key;
let value;

do {
    key = prompt("Enter Friuts: ");
    value = prompt("Enter Quantity")

    if (key != 'stop' && value != 'stop' && value == 1) {
        friuts[key] = +value;
    } else if (value > 1) {
        friuts[`${key}s`] = +value;
    }

} while(key != TERMINATE && value != TERMINATE);

console.log(friuts);