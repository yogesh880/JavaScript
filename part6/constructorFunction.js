function Person(name,age){
    this.name=name,
    this.age=age   
}
function Car(Company,Model){
    this.Company=Company,
    this.Model=Model
}
let MyCar=new Car('Tata','Safari');
// console.log(MyCar);

function Tea(Type){
    this.Type=Type,
    this.describe=function(){
        return `This is a cup of ${this.Type}`;
    }
}

let MyTea=new Tea('Lemon');
// console.log(MyTea.describe());

function Animal(Species){
    this.Species=Species
}
Animal.prototype.Sound= function(){
    return `${this.Species} Makes a Sound`;
};
let Dog = new Animal('Dog');
// console.log(Dog.Sound());

function Drink(Name){
    if(!new.target){
        throw new Error('Drink must created by new keywords');
    }
    this.Name=Name
}
let tea= new Drink('tea');
let Coffee= Drink('Coffee');