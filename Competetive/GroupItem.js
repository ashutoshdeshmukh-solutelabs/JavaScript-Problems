let people = [
    {name : "Alice", age: 21},
    {name : "Max", age: 20},
    {name : "Jan", age :20}
]

let ans = people.reduce((item,obj)=>{
    const key = obj.age;
    if(!item[key]){
        item[key]=[];
    }
    item[key].push(obj);
    return item;
},{})

console.log(ans);
