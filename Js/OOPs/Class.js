class User{
    constructor(name){
        this.name= name;
    }

    sayHi(){
        console.log("Hii "+this.name);
    }
}

let user = new User("Dhruv");
console.log(user.name);
console.log(user.sayHi());
console.log(typeof(user));
console.log(typeof(User));