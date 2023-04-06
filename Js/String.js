let str = "Apple, Banana, Orange, Apple";
let str1 = "Orange";
console.log(str.length);
console.log("slice method = " + str.slice(7,13));
console.log("slice method = "+str.slice(-10));

console.log("Sub String = "+str.substring(7));
console.log("replace method = "+str.replace("Banana","Apple"));
//console.log("char At "+str.charAt(6));
let a = str.charAt(3);
console.log(a);
console.log("Concate two String = "+str.concat(str1));

console.log("IndexOf "+str.indexOf("Apple"));
console.log("Last Index Of " + str.lastIndexOf("Apple"));
console.log("");

let str2 = "Dhruv Babariya P";
let str3 = str2.split(" ");
console.log(str2);
console.log(str3); 