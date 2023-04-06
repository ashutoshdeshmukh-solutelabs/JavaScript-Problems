let arr = [1,2,3,4,5,6,7,8,9];

let pairOfSum = (array,sum)=>{
    let ans = [];
    for(let i=0;i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if((array[i]+array[j])===sum){
                ans.push([array[i],array[j]]);
            }
        }
    }
    return ans;
}

console.log(pairOfSum(arr,3));