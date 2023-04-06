class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} run with speed `)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
      }
    }
    
    let animal = new Animal("Monkey");
    console.log(animal);
    animal.run(100);
    console.log(animal);
    animal.stop();
    console.log(animal.speed);