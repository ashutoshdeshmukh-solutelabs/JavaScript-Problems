let obj1 = {
    name : "Dhruv",   
}

let obj = new Object();
obj.name = "Dhruv";

function obj2(name,age){
   return{
    name : name,
    age : age,
   };
}

let obj3 = obj2("Dhruv",22);

console.log(typeof(obj1));
console.log(typeof(obj));
console.log(typeof(obj3));

let user ={
}
user.name = "John";
user["surname"]="smith";
console.log(user);
user.name = "pete";

delete user.name;

console.log(user);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function isEmpty(obj){
    return Object.keys(obj).length===0;
}
console.log(isEmpty(salaries));
if(isEmpty(salaries)){
    console.log("Salary is = 0");
}else{
    let sum = 0;
    for(let i in salaries){
        sum+=salaries[i];
    }
    console.log("Total Salaries = "+sum);
}

//check wheather properties are numeric or not if it is numeric then perform 2*value

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let multiplyNumeric = ((menu2)=>{
    for(let key in menu2){      
        if(typeof(menu2[key])=="number"){
           menu2[key] *= 2;
        }
    }
});
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

let User = new function(){
    this.name = "Dhruv"
    this.isadmin = false
}

let user1 = {
    name: "John",
    age: 30
  };

  for(let [key, value] of Object.entries(user1)){
    console.log(`${key} : ${value}`)
  }

  function createBicycle(speed,gear){
    let bicycle = {}
    bicycle.speed = speed;
    bicycle.gear = gear;
    return bicycle;
}

//Below is function constructor 

function Bicycle(speed,gear){
    //let this={}
    this.speed = speed;
    this.gear = gear;
    //return this
}

let bicycle1 = createBicycle(80,3);

let bicycle2 = new Bicycle(70,4);

console.log("Using normal function = "+bicycle1);
console.log("Using Functon constructor = "+bicycle2);
console.log(NaN==NaN);