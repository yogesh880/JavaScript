// Number
let balance = 120; // integer
let  otherBalance = new Number(100); // object
console.log(typeof balance); // number  
console.log(typeof otherBalance); // object
console.log(balance); // 120    
console.log(otherBalance); // [Number: 100]
console.log( otherBalance.valueOf()); // 100

// boolean
let isLoggedIn = true; // boolean   
let otherLoggedIn = new Boolean(false); // object  , Not recomnded
console.log(typeof isLoggedIn); // boolean
console.log(typeof otherLoggedIn); // object

// null and undefined
let firstName = null; // null
let lastName; // undefined  
console.log(typeof firstName); // object
console.log(typeof lastName); // undefined
console.log(undefined == null);  // true   (loose equality)
console.log(undefined === null); // false  (strict equality)


// string
let userName = 'Sanket'; // string
let myString ='Hello';

let oldGreet= myString + ' ' + userName; // Hello Sanket
let newGreet= `Hello ${userName}!`; // Hello Sanket
console.log(oldGreet);
console.log(newGreet);

// symbol
let id = Symbol('123'); // symbol  
console.log(typeof id); // symbol
console.log(id); // Symbol(123) 
let otherId = Symbol('123'); // symbol
console.log(id === otherId); // false   