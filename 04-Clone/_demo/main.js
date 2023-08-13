console.log("Object Clone");

const todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023',
};

// Clone

// 1. เอาต้นแบบมา loop แล้ว assign ที่ละ key:value ให้ object ใหม่
// const newTodo = {}

// for(let key in todo) {

    // assign ที่ละ key:value ให้ newTodo
    // newTodo[key] = todo[key];
    // newTodo['task'] = todo['task'] => 'Do Hw'
    // newTodo['complete'] = todo['complete'] => false
    // newTodo['due_date'] = todo['due_date'] => 13-08-2023
// }
// console.log(newTodo)
// newTodo.complete = true;
// console.log(newTodo.complete);
// console.log(todo.complete);

// * 2. Object.assign(dst, [src1, src2, ..., srcN])
// retrun address ของ destination (param 1)

// 2A
// const newTodo = { complete: true, };
// Merge(รวม)/Override(เขียนทับ) Eval Direction : Right => Left
// Object.assign(newTodo, todo);
// console.log(newTodo); // Merge มา ค่าที่มีอยู่จะโดนทับ
// newTodo.complete = true;
// console.log(newTodo) // สามาถเปลี่ยนได้ปกติ โดยไม่ไปยุงกับ obj todo

// 2B
const newTodo = Object.assign({}, todo)
console.log(newTodo);

