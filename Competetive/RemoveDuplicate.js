let arr = [1,3,5,6,4,6,6,5,4,3];

let unique = {};

for(let i=0;i<arr.length;i++){
    const exist = unique[arr[i]];
    if(exist){
       let l= arr.splice(i,1);
       i--;
    }else{
        unique[arr[i]]=arr[i];
    }
}
console.log(arr);