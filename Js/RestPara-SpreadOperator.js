// function sum(a,b,...c){
//     let ans = a+b+c;
//     console.log(ans);
// }

// sum(3,4,5,6,7,8,9);

//using Rest Parameter we can write this function

let sum = (...input) =>{
    let total =0;
    for(let i of input){
        total+=i;
    }
    console.log("Total = "+total);
}

sum(1,2,3,3,4,5,5,65,6,6);
sum(3,4,5,6,7,8,9);
sum(1,2,3,4,5,6,7,8,9);

//spread Operator: Spread operator is use in the array for concate,copy etc.

let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9];
arr1 = [...arr1,...arr2];

console.log(arr1);
console.log(arr2);

// let arr3 = [1,2,3];
// let arr4 = arr3;

// arr4.push(4,5);

// console.log(arr3);
// console.log(arr4);

let arr3 = [1,2,3];
let arr4 = [...arr3,4,5];

console.log(arr3);
console.log(arr4);
