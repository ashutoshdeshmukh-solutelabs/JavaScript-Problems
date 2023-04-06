let cart = ["shirt","T-shirt"]


createOrder(cart).then(function (orderId){
    console.log("A is called"+orderId);
    return orderId;
})

.then((orderId)=>{
    console.log(processToPayment(orderId));
    return processToPayment(orderId);
})

.then((paymentInfo)=>{
    console.log(showOrderSummary(paymentInfo));
   return showOrderSummary(paymentInfo);
})
.then((showOrderInfo)=>{
    console.log(updateWallet(showOrderInfo));
    return updateWallet(showOrderInfo);
})
.catch((err) => {
    console.log(err.message);
});

function updateWallet(showOrderInfo){
    return new Promise((resolve,reject)=>{
        resolve(showOrderInfo+"  Wallet is Updated");
    })
}

function showOrderSummary(paymentDetails){
    return new Promise((resolve,reject)=>{
        reject(paymentDetails+"   Order Details is showed");
    })

}
function processToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}

function createOrder(cart){
    return new Promise(function(resolve,reject){
        //create OrderId
        let orderId = "12345";
        if(isValidate(cart)){
            resolve(orderId);
        }else{
            let err = new Error("OrderId is not valid");
            reject(err);
        }
    })
}

function isValidate(orderId){
    return true;
}
