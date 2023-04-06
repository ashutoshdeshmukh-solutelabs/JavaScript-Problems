// Here We Copy One Object to another 
let obj = {

    name : "Dhruv",
    age : 21
}
console.log("Before Copy Object Value = "+obj.name);
// let user = obj;

// user.name = "xyz";

// console.log("Object Value = "+obj.name);
// console.log("User Value = "+user.name);

//Using Shallow Copy There Are two Solutions Are There
//1. Using a object.assign Function 

// let secondUser = Object.assign({},obj);
// secondUser.name = "abc";

// console.log("Object Value = "+obj.name);
// console.log("User Value = "+secondUser.name);

//2. Using a spread(...) syntax

let user = {...obj};
user.name = "xyz";

console.log("Object Value = "+obj.name);
console.log("User Value = "+user.name);



//Shallow Copy We can not copy the nested obj.

let Obj2 = {
    name : "Dhruv",
    address : {
        city : "Ahemedabad",
        state : "Gujrat"
    }
}

let User = Object.assign({},Obj2);

User.address.city = "Baroda";
console.log(Obj2);
console.log(User);

//Using JSON.Stringify
let secondUser = JSON.parse(JSON.stringify(Obj2));

secondUser.address.city = "Rajkot";

console.log(Obj2);
console.log(secondUser);


let like = 100;
const youtube = ()=>{
    name : "xyz";
    subscriber : 2000;
}

const youtuber = (a,b)=>{
    a =200;
    const youtu = ()=>{
        console.log(a);
    }
    b.subscriber = 3000;
    return youtu;
} 

let value = youtuber(like,youtube);
value();
// console.log(value);

// youtuber(like,youtube);

// console.log("Youtube Subscriber = "+youtube.subscriber);
// console.log("Likes = "+like);