
// //Asynchronous
// console.log(" I ");

// console.log(" eat ");

// setTimeout(() =>{
//     console.log(" ice - cream ");
// },3000 )

// console.log(" spoon ");

// console.log(" with a ");

// function one(call_two){
//     console.log("step 1 complete");
//     call_two();
// }

// function two(){
//     console.log("step-2 ");
// }

// one(two);

let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["cone","cup","stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (fruitName,call_production) =>{
 
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruitName]} Order Placed `)
    },2000)
    
    call_production();
}
 
let production = ()=>{
    setTimeout(()=>{
        console.log(`Production has started `) 
    
            setTimeout(()=>{
                console.log(`The fruit has been chopped `);
                
                setTimeout(()=>{
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);

                    setTimeout(()=>{
                        console.log(`The Machine was Started`);

                        setTimeout(()=>{
                            console.log(`ice cream was placed in cone`);

                            setTimeout(()=>{
                                console.log(`${stocks.toppings[0]} topping was added`);
                                
                                setTimeout(()=>{
                                    console.log(`Ice-cream was Ready to serve`);
                                },2000)
                            },3000)
                        },2000)
                    },1000)
                },1000)
            },2000)
        },0000)   
}
order(0,production);