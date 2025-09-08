const person={
    name :'Yogesh',
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
}
person.greet();
let functionGreet = person.greet;
functionGreet();
let bindGreet = person.greet.bind({name:'Alex'});
bindGreet();

// Call example 
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const user = { name: "Alice" };
greet.call(user, "Hello", "!"); // "Hello, Alice!"

//apply example

greet.apply(user, ["Hi", "!!"]);