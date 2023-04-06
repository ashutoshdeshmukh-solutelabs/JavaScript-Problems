function calculator(a,b){
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;

    return [add,sub,mul,div];
}

let [add,sub,mul,div] = calculator(3,6);

console.log(add);
console.log(sub);
console.log(mul);
console.log(typeof(div).toExponential());

//Destructure Object 

const vehicle = {
    brand: 'Ford',
     model: 'Mustang',
    type: 'car',
    year: 2021, 
    color:{
        red : "Red",
        blue : "Blue",
    } 
}

let {brand, model,type,color} = vehicle;
console.log(brand+color.red);
let car = function({brand,type,year,color}){
    console.log("Brand = "+brand+" type = "+type+" year = "+year+" color = "+color);
}

car(vehicle);