let array = [1,4,3,6,5]

let n = array.length;

function missing(arr,n){
    let sum = Math.floor(((n+1)*(n+2))/2);
    for(let i=0;i<n;i++){
        sum = sum-arr[i];
    }
    return sum;
}
console.log("Missing Number = "+missing(array,n));