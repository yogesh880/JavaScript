let computer={
    CPU:12
}
let lenevo= { screen :'HD',
    __proto__:computer
}

let TomHardwere= {};

// console.log(computer);
// console.log(`computer`,computer.__proto__);
// console.log(`lenevo`,lenevo.__proto__);

let genericCar ={ tyre:4}
let tesla={Driver: 'AI'}
Object.setPrototypeOf(tesla,genericCar);
console.log('tesla',Object.getPrototypeOf(tesla));

