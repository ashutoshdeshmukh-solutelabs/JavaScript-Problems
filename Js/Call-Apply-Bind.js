let object = {
    name : "Dhruv",
    lastName : "Babariya"
}

function fullName(city,state){
    console.log(this.name+" "+this.lastName+" from "+city+", "+state);
}

let object2 = {
    name : "Sachin",
    lastName : "Tendulkar"

}

console.log(fullName.call(object,"Ahmedabad","Gujrat"));

console.log(fullName.call(object2,"Surat","Gujrat"));
console.log(fullName.apply(object,["Vadodara","Gujrat"]));

let printName = fullName.bind(object,"Mumbai","Maharastra");
console.log(printName());