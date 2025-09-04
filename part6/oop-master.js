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
function Animal(){}
Animal.prototype.speak= function(){
        return `Animal speaking`;
    }  
      
function Dog() {}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
   
Dog.prototype.bark=function(){
        return`Woof!`
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
// Inheritance
class Car extends Vehicle{
    driver(){
        return `${this.model} : This is inheritance example`
    }
}
let MyCar = new Car('Tata','Safari');
// console.log(MyCar.driver());
// console.log(MyCar.start());

// Incapsulation example

class BankAccount{
    #accountBalance=0;
   Deposit( amount){
      this.#accountBalance=this.#accountBalance+amount;
      return `$ ${this.#accountBalance}`
   }
   getBalance(){
    return `$ ${this.#accountBalance}`
   }
}
let account = new BankAccount()
account.Deposit(50000);
// console.log(account.getBalance());

// Abstraction

// Polymorphism
class Bird{
     Fly(){
        return `Birds can fly.....`
     }
}
class Penguin extends Bird{
       Fly(){
        return `Penguin Cannot fly....`
       }
}
let bird = new Bird()
// console.log(bird.Fly());
let penguin = new Penguin();
// console.log(penguin.Fly());


// Static keywords

class CalCulator{
    static add(a,b){
        return a+b;
    }
}
// console.log(CalCulator.add(2,6));
