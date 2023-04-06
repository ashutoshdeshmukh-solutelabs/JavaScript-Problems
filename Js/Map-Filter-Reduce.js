const array = [2,3,4,5];

const output = array.map((x)=> x +2);
console.log(output);

const value = array.filter((x)=> x>3);
console.log(value);

const maxvalue = array.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0)
console.log(maxvalue);

const data = [{firstName : "Dhruv", lastName : "Babariya", age : 22},
              {firstName : "Pradip",lastName : "Chavda", age : 24},
              {firstName : "Divyesh",lastName: "patel", age : 22},
              {firstName : "Nikhar", lastName : "panchal", age : 26}];

const outputdata = data.reduce(function (acc,curr){
    
    // if(curr.age > 22){
    //     acc.push(curr.firstName);
    // }
     acc+=curr.age
    return acc;
},0);

let a1 = Array.of(outputdata);

console.log(a1);

const datavalue = data.filter((x)=>x.age<25).map((x)=>x.firstName+" "+x.lastName);

console.log(datavalue);

let a=23;
// console.log(typeCheck(a));

let arr2 = ['abc','xyz','lmn'];

console.log(arr2.map((x)=>x.at(0).toUpperCase()));
console.log(arr2);