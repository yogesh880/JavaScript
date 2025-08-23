// arithmetic operators
let addition = 1+1;
console.log(addition); // Output: 2 
let subtraction = 5-2;
console.log(subtraction); // Output: 3
let multiplication = 3*4;
console.log(multiplication); // Output: 12
let division = 10/2;
console.log(division); // Output: 5
let modulus = 10%3; // Remainder of 10 divided by 3
console.log(modulus); // Output: 1
let exponentiation = 2**3; // 2 raised to the power of 3  
console.log(exponentiation); // Output: 8

// increment and decrement operators      
let increment = 5;
let decrement = 5;
console.log(increment++); // Output: 5 (returns the value before incrementing)
console.log(++increment); // Output: 6 (increments first, then returns the value)   
console.log(decrement--); // Output: 5 (returns the value before decrementing)
console.log(--decrement); // Output: 4 (decrements first, then returns the value)

// comprison operators
let isEqual = (5 == '5'); // true, because values are equal 
let isStrictEqual = (5 === '5'); // false, because types are different
let isNotEqual = (5 != '5'); // false, because values are equal
let isStrictNotEqual = (5 !== '5'); // true, because types are different
let isGreater = (10 > 5); // true
let isLess = (5 < 10); // true
let isGreaterOrEqual = (5 >= 5); // true
let isLessOrEqual = (5 <= 10); // true 
let logicalAnd = (true && false); // false
let logicalOr = (true || false); // true   
let logicalNot = !true; // false
let complexExpression = ((5 + 3) * 2) / 4 - 1; // Complex expression combining multiple operators
// Logical operators    
let a = 10;
let b = 20;
let c = 30;
let result = ((a < b) && (b < c)); // true, because both conditions are true
let anotherResult = (a > b) || (b < c); // true, because one condition is true
let notResult = !(a < b); // false, because a is indeed less than b
let combinedResult = ((a + b) > c) && ((b - a) < c); // true, combining multiple conditions

// ternary operator
let age = 18;
let canVote = (age >= 18) ? 'Yes, you can vote.' : 'No, you cannot vote yet.';
console.log(canVote); // Output: Yes, you can vote.
let isAdult = (age >= 18) ? true : false;
console.log(isAdult); // Output: true

// assignment operators
let x = 10; // Assignment  
x += 5; // Equivalent to x = x + 5, now x is 15
x -= 3; // Equivalent to x = x - 3, now x is 12
x *= 2; // Equivalent to x = x * 2, now x is 24
x /= 4; // Equivalent to x = x / 4, now x is 6
x %= 4; // Equivalent to x = x % 4, now x is 2
x **= 3; // Equivalent to x = x ** 3, now x is 8 (2^3)  

// comma operator
let y = (1, 2, 3); // y will be 3, the last value
console.log(y); // Output: 3    
let z;
z = (x = 5, x + 10); // x is assigned 5, then z is assigned x + 10
console.log(z); // Output: 15       

// typeof operator
console.log(typeof str); // Output: string
console.log(typeof num); // Output: number  
console.log(typeof bool); // Output: boolean
console.log(typeof user); // Output: object 

// operator precedence
let precedenceResult = 3 + 5 * 2; // Multiplication has higher precedence 
console.log(precedenceResult); // Output: 13
let precedenceResultWithParentheses = (3 + 5) * 2; // Parent
console.log(precedenceResultWithParentheses); // Output: 16heses change the order

//