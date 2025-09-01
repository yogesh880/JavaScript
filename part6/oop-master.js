// ------objects ----
let car={
    make : 'Toyota',
    model: 'Camry',
    year:2020,
    start : function(){
        return `${this.make} has started`;
    }
}
// console.log(car.start());

//----- constructor function---------
function Person(name,age){
    this.age=age
    this.name=name
}
let john = new Person('John Doe',21);
// console.log(john.name);

//------Prototypal chain---
function Animal( Type){
    this.Type=Type
}
Animal.prototype.Speak =function(){
    return `${this.Type} Makes a sound`;
}

// -------- Class ------
class Vehicle{
    constructor(make,model){
        this.model=model;
        this.make=make;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
};
class Car extends Vehicle{
    driver(){
        return `${this.model} : This is inheritance example`
    }
}
let MyCar = new Car('Tata','Safari');
console.log(MyCar.driver());
console.log(MyCar.start());
