class CoffeeMachine{
    #waterAmount = 0;

    constructor(power){
        this.power = power;
        console.log(`Making a Coffee With Power ${this.power}`);
    }

    set waterAmount(value){
        if(value<0){
            value=0;
        }
        this._waterAmount=value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    // Getter and setter Function
    setWaterAmount(value){
        if(value<0){
            this._waterAmount = 0;
        }
        this._waterAmount=value;
    }

    getWaterAmount(){
        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10;

// console.log(coffeeMachine.waterAmount);

// console.log(coffeeMachine instanceof CoffeeMachine);

console.log(coffeeMachine._waterAmount);
let a= 34;
console.log({}.toString.call(a));
