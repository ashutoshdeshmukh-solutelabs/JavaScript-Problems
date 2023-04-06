let date = new Date("2000-01-01");
console.log(date);
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let flag = 0;
if(day == 1){
    if(month >=0 && month<12){
        if(String(year).length == 4){
            flag=1;
        }
    }
}
if(flag==0){
    console.log("Date is not a First Day Of Month");
}else{
    console.log("Date is First Day Of Month");
}