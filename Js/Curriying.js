function multiply(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,6);

multiplyByTwo(6,2);
multiplyByTwo(5,2);

