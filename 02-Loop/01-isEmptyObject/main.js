// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// Object => BOOLEND
function isEmptyObj (object) {
    let isEmpty = true;

    for (let Key in object) {
        isEmpty = false;
    }
    return isEmpty;
}

const object = {
    name: 'CC',
    age: 15,
};

    // - check loop obj ว่าง?
    // let isEmpty = true;
    // for (let Key in object) {
    //     isEmpty = false;
    // }
    // isEmpty;