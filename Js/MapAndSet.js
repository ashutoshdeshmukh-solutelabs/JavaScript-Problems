let map=new Map()
map.set("Dhruv",23);
map.set("Divyesh",32);
map.set("Sachine",45);

let a = map.get("Dhruv");
console.log("mapped = "+map);
console.log("A = "+a);

console.log(map.has("Divyesh"));

console.log(map.delete("Sachine"));

console.log("Size = "+map.size);

for(let key of map.keys()){
    console.log(key);
}
for(let value of map.values()){
    console.log(value);
}
for(let entries of map.entries()){
    console.log(entries);
}

map.forEach((key,value,map)=>{
    console.log(`${key} : ${value}`);
})

// convert map to Object

let obj =  Object.fromEntries(map.entries());
console.log("Object  =  "+obj);
// convert Object to Map

  let obj2 = {
    name : "Dhruv",
    age : 23
  }
   let map2 = new Map(Object.entries(obj2));

   console.log(map2);


   let array = [12,23,43,24,34,23,12,43,56,54,34,67];

   let set = new Set(array);
   for(let value of set){
        console.log(value);
   }

   set.add("Dhruv");
   for(let value of set){
    console.log(value);
}

let a1 = new Set();
a1.add(23);
a1.add("abc");