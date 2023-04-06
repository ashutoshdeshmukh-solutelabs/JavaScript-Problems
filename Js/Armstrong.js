let no = 8208;
let temp = no;
let count = no.toString().length;

let sum=0;
while(no>0){
    let rem = parseInt(no%10);
    sum += Math.pow(rem,count);
    no = parseInt(no/10);
}

if(temp==sum){
    console.log(`${temp} is  a Armstrong Number`)
}else{
    console.log(`${temp} is Not a Armstrong Number`)
}


//Convert lower to upper and upper to lower

let str = "dhRuV BaBaRiyA";
let str2 ="";
for(let i=0;i<str.length;i++){
    let a = str[i].charCodeAt();
    
    if(a>=65 && a<=90){
        a+=32;
        str2+=String.fromCharCode(a);
    }
    else{
        a-=32;
        str2+=String.fromCharCode(a);
    }
}
console.log("Reverse String = "+str2);

let dhruv = "Dhruv";
dhruv = 32;
console.log(" = "+dhruv);