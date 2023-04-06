function sum(a,b=4){
    console.log(a+b);
}

sum(3);

sum(3,2);

let mul = (a,b=3) => a*b;

console.log(mul(2));
console.log(mul(2,2));