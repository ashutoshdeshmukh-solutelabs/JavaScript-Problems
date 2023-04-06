let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["cone","cup","stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_shop_open = true;

// let toppingChoice = ()=>{
//     return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve(console.log("Which topping would you loved"));
//     },3000)
// });
// };

// async function kichen(){

//     console.log(" A ");
//     console.log(" B ");
//     console.log(" C ");

//     await toppingChoice();

//     console.log(" D ");
//     console.log(" E ");
// }
// kichen();
// console.log("Doing the dishes");
// console.log("Cleaning the dishes");

let time = (ms)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Shop is closed"));
        }
    })
}

async function kichen(){
    try{
        await time(0000);
        console.log("Production has started");

        await time(2000);
        console.log("Product is chopped");
    }
    catch(error){
        console.log("shop is closed"+error);
    }
    finally{
        console.log("It is run anytime");
    }
}
kichen()