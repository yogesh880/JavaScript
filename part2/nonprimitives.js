// Non-Primitives

const userName = {
    firstName: 'Yogesh',
    isLoggedIn: true,
}
console.log(userName.firstName); // Yogesh
console.log(typeof userName); // object
console.log(userName); // { firstName: 'Yogesh', isLoggedIn: true }
userName.firstName = 'Sanket';
console.log(userName.firstName); // Sanket  

// array
const myNumbers = ['Yogesh',true,3];
console.log(myNumbers); // [ 'Yogesh', true, 3 ]

// type conversion
console.log(typeof String(100)); // string  