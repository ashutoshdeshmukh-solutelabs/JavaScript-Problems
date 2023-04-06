

const data=[
    {
        id: 1,
        name: "jigar",
        collegeName: "abc",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 2,
        name: "dev",
        collegeName: "xyx",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 1,
        name: "jigar",
        collegeName: "abc",
        age: 17,
        marks:[95,24,35]
    },
    {
        id: 4,
        name: "mno",
        collegeName: "npq",
        age: 17,
        marks:[89,34,35]
    },
    {
        id: 5,
        name: "nno",
        collegeName: "iit",
        age: 17,
        marks:[67,24,35]
    },
    {
        id: 6,
        name: "def",
        collegeName: "SAL",
        age: 17,
        marks:[67,24,35]
    },
    {
        id: 7,
        name: "KAZI",
        collegeName: "GIT",
        age: 17,
        marks:[30,50,50]
    }
];

let collage = data.reduce((item,obj)=>{
    const key = obj.collegeName;
    if(!item[key]){
        item[key]=[];
    }
    item[key].push(obj);
    return item;
},{})
console.log(collage);

data.sort((a,b)=>{
   const c = a.marks.reduce((acc,curr)=>{
        acc=acc+curr;
        return acc;
    },0);
    const d = b.marks.reduce((acc,curr)=>{
        acc=acc+curr;
        return acc;
    },0);
    if((c/a.marks.length)<(d/a.marks.length)){
        return 1;
    }
    else if((c/a.marks.length)>(d/a.marks.length)){
        return -1;
    }
    else{
        let e = 0;
        if(a.name>b.name){
            e=1;
        }else if(a.name<b.name){
            e = -1;
        }
        else{
            e=0;
        }
        return e;
    }
})
console.log(data)

// let data2= Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);

// console.log(data2);
