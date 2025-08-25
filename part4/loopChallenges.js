/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let i=1;            
let sum=0;
while(i<=5){
    sum+=i;
  i++;
}
//console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let countdown=[];
let j=5;    
while(j>=1){
    countdown.push(j);
    j--;
}       
//console.log(countdown);


/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
/*
let teaCollection=[];
let teaType;
do{  
    teaType=prompt("Enter your favorite tea type (or 'stop' to finish):");

    if(teaType.toLowerCase()!=="stop"){  
    teaCollection.push(teaType);}
   }while(teaType.toLowerCase()!=="stop");
console.log(teaCollection);
*/
/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total=0;
i=1;
do{
    total+=i;
    i++;
}while(i<=3);   
//console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let numbers=[2,4,6];
let multipliedNumbers=[];
for(let k=0;k<numbers.length;k++){
    multipliedNumbers.push(numbers[k]*2);
}   
//console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities=["Paris", "New York", "Tokyo", "London"];
let cityList=[];    
for(let k=0;k<cities.length;k++){
    cityList.push(cities[k]);
}
console.log(cityList);


