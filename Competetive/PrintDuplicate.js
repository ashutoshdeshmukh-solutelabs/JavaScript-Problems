let arr = [1,3,5,6,4,6,6,5,4,3];
let set = new Set();

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j])
        {
            set.add(arr[i]);
        }
    }
}
console.log(set);