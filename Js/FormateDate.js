let date = new Date("2000-01-01");
console.log(date);

console.log(date.toLocaleDateString());
console.log(date.toLocaleString("es-CL",{month : 'numeric',day:'2-digit',year:'numeric'}));

 console.log(date.toLocaleString("en-US",{month : 'short',day:'2-digit',year : 'numeric', weekday:'short'}));
// console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);



