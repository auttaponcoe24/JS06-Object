console.log('Constructor Function');

const dev1 = {
    name: 'john',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function () {
        console.log(`im develop some features`)
    },
};

// Object Creators == Constructor Function

function Developer (name, age) {
    // Implicit create this = {}

    this.name = name; // {name: 'Auttapon'}
    this.age = age; // {name: 'Auttapon', age: 25, }
    this.role = 'dev';
    this.salary = 40_000;
    this.dev = function () {
        console.log(`${this.name} im develop some features`);
    }; // {name..., dev: fn()}

}; // return {name..., dev: fn()}}

// this == dev2
// this === Instance
const dev2 = new Developer('Auttapon', 25);
console.log(dev2);
dev2.dev();

const dev3 = new Developer('Jane', 25)
console.log(dev3)
dev3.dev();