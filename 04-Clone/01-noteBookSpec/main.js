// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign


// ```js
const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

// ```

const newNotebook = {};

// solu for..in
for (let key in notebook) {
    newNotebook[key] = notebook[key];
}

// solu Object.assgin
const newNotebook2 = Object.assign({}, notebook)
console.log(newNotebook);
console.log(newNotebook2);
