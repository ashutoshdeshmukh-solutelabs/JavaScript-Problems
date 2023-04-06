let arr = [ "hello", "world", "java", "hello", "java",3,4,3,4,5 ];
let count = 0;

let ans = arr.reduce((value,item)=>{
    const key = item;
    if(!value[item]){
        value[item]=[];
    }
    value[key].push(item);
    return value;
},{})
for(let key in ans){
    console.log(key+" = "+(ans[key].length));
}