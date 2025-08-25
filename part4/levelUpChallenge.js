/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let array=["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas=[];
for ( let i=0; i<array.length; i++){
    if (array[i]==='chai'){
        break;
    } else{
        selectedTeas.push(array[i]);
    }
}
//console.log(selectedTeas);
/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
 let city =["London", "New York", "Paris", "Berlin"];
 let visitedCities=[]
 for (let i=0; i<city.length; i++){
    if (city[i]==='Paris'){
        continue;
    }
    visitedCities.push(city[i]);
 }
// console.log(visitedCities);
/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let number=[1, 2, 3, 4, 5];
let smallNumbers=[]
for ( let i of number){
    if (i===4){
        break;
    }
    smallNumbers.push(i);
}
// console.log(smallNumbers);
/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let tea=["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas=[]
for (let i of tea){
    if(i==='herbal tea'){
        continue
    }
    preferredTeas.push(i);
}
// console.log(preferredTeas);
/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
//  console.log(cityNewPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities={};
for( i in worldCities){
    if (worldCities[i] <3000000){
        continue;
    }
    largeCities[i]=worldCities[i];
}
// console.log(largeCities);




/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let allTea=["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas=[]
allTea.forEach((n)=>{
    if (n==='chai'){
      return;
    }
availableTeas.push(n)
})
// console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let myWorldCities=["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities=[]
myWorldCities.forEach((city)=>{
    if(city==='Sydney'){
        return;
    }
    traveledCities.push(city);
})
// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let nums1=[2, 5, 7, 9];
let doubledNumbers=[]
for(let i=0; i<nums1.length; i++){
    if (nums1[i]===7){
        continue;
    }
    doubledNumbers.push(nums1[i]*2);
}
// console.log(doubledNumbers);


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/
let myTeas=["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas=[]
for( i of myTeas){
    if( i.length>10){
        break
    }
    shortTeas.push(i);
}
console.log(shortTeas);

