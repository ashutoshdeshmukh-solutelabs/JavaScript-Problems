//Class Expression

let User = class{
    sayHi(){
        console.log("Hello");
    }
}

//class Named function Expression
// It is not visible Outside the class

let User2 = class Myclass {
    sayHi(){
        console.log("Hii");
        console.log(Myclass);
    }
};

let u = new User2();
u.sayHi();
// console.log(Myclass);

function makeClass(phrase){
    return class{
        sayHi(){
            console.log("Hello world");
        };
    }
}

let userClass = makeClass("Hello");
new userClass().sayHi();

//Generate Getter and setter Of Class member

class employee{
    
    // constructor(name,age){
    //     this.name = name;
    //     this.age = age;
    // }

    get getname(){
        return this.name;
    }
    set name(value){
        if(value.length>4){
            this.name = value;
        }
    }
    get getage(){
        return this.age;
    }
    set age(value){
        if(value>19){
            this.age = value;
        }
    }
}

// let emp = new employee("Dhruv",21);
let emp1 = new employee();
emp1.name("Dhruv");
console.log(emp1.getname());

