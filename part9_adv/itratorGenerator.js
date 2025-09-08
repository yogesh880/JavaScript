function* numGenerator(){
    yield 1
    yield 2
    yield 3
}
let gen = numGenerator();
let gen2 = numGenerator();
console.log(gen.next().value);  //1
console.log(gen.next().value); //2
console.log(gen2.next().value); //1
console.log(gen2.next().value);  //2
console.log(gen2.next().value);  //3
console.log(gen2.next().value);  // undefined


