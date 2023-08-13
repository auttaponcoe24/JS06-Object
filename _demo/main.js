const user = {
    firstName: 'Auttapon',
    lastName: 'Chucheung',
    age: 15,
};

// For IN : Loop through Object
// for (let <key_variable> in <obj>) {}
for (let key in user) {
    console.log(`KEY: ${key}`); // dynamics assign by JS
    //1st : let key = "firstName"
    //2nd : let key = "lastName"
    //3rd : let key = "age"


    console.log(`VAL: ${user[key]}`); //need to access by bracket[] ,computed key
    // 1st : user[key] == user['firstName'] ==> Auttapon
    // 2nd : user[key] == user['lastName'] ==> Chucheun
    // 3nd : user[key] == user['age'] ==> 15

    console.log(user.key);
    // 1st : user.key == user['key'] ==> undefined 
    // 2nt : user.key == user['key'] ==> undefined 
    // 3rt : user.key == user['key'] ==> undefined 
}
// let key = "firstName"
// user.key === "key"


//'firstName' in user; // true
//'age' in user; // true
//'phone' in user; // false