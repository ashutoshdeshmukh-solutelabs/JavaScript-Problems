let friends = [
    {
        name : 'anna',
        books : ['Bible','Geeta','Harry Potter'],
        age :20,
    },
    {
        name : 'Bob',
        books : ['War and Peace','Geeta','Quran'],
        age : 22,
    },  
    {
        name : "Alice",
        books : ['The Monk','Pride and Prejudice','Good Morning'],
        age : 21
    }
];

let ans = friends.reduce((bookarray,obj)=>{
    let value = obj.books;
    bookarray.push(value);
    return bookarray;
},[])
let set =new Set(ans.flat());
console.log(Array.from(set));