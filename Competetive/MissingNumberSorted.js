let array = [1,2,5];

let n = array[array.length-1];
let ans =[]
for(let i=1;i<=n;i++){
    if(array.indexOf(i)==-1){
        ans.push(i);
    }
}
console.log(ans);