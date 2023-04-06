let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["cone","cup","stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_shop_open = false;

let order = (time,work) =>{
    return  new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject();
        }
    });
};

order(2000,()=>console.log(`${stocks.Fruits[0]} is selected`))
.then(()=>{
    return order(0000,()=>console.log("Production was started"))
})

.then(()=>{
    return order(2000,()=>console.log("Chopped the fruit"))
})

.then(()=>{
    return order(1000,()=>console.log("Add Water and ice"))
})

.catch(()=>{
    console.log("Customer left");
})

.finally(()=>{
    console.log("Day ended Shop is closed");
})