
class Student{
    constructor(name,age,cls){
        this.name=name;
        this.age=age;
        this.cls = cls;
    }

    Display(){
        console.log(`Hii, I am ${this.name} My age is ${this.age} I am Student of class ${this.cls}`);        
    }
}

class Player extends Student {
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.game = game;
    }

    Display(){
        super.Display();
        console.log(`and I am Player of ${this.game}`);
    }
}

let obj =new Player("Dhruv",23,"Msc","Cricket");
obj.Display();


class Animal{
    name;

    constructor(name){
        this.name = name;
        console.log(this.name);
    }
}

class Rabbit extends Animal{
    name ="Rabbit";

}

new Animal("Monkey");
new Rabbit();