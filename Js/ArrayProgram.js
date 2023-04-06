let arr = [1,"40",3,42];
let length = (arr.length+1)/2
console.log(typeof(arr[0]));
console.log(typeof(arr[1]))
let a = arr.push(10);
let b = arr.pop();
console.log(a);
console.log(b);

let arr1 = [1,2,3,[[4,5],6,7]];

// flat() and flat(depth) return A new array with the sub-array elements concatenated
//  into it.

console.log(arr1.flat());
console.log(arr1.flat(2));

let arr2 = [1,2,3,4,5,6];


console.log(arr2.map((x)=> [x*2]));

console.log(arr2.flatMap((x)=>[x*2]));



let arr3 = [1,2,3,4,5];

arr3.reverse();

console.log(`Reverse Array : ${arr3}`);

let arr4 = arr3.cop