// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

let key;
let value;
const TERMINATE = 'stop'
let obj = {};

do {
    key = prompt("Enter Key");
    value = prompt("Enter Value");

    if(key != 'stop' && value != 'stop' && (typeof value !== 'number')){
        obj[key] = value;
    } else if (typeof value === 'number'){
        obj[key] = +value;
    } else if (typeof value === 'boolean'){
        obj[key] = Boolean(value);
    }
    
} while (key != TERMINATE && value != TERMINATE);


console.log(obj);