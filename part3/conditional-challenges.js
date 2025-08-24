// checking if a number is greater than another number:
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

// checking if a string is equal to another string:
let str1 = 'hello';
let str2 = 'world';
if (str1 === str2) {
    console.log(`${str1} is equal to ${str2}`);
} else {
    console.log(`${str1} is not equal to ${str2}`);
}

// Switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}