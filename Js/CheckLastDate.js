let date = new Date("2003-02-28");
function lastDate(date){
    
    let lastDateOfMonth = new Date(date.getFullYear(),date.getMonth()+1,0);
    if(date.getDate()==lastDateOfMonth.getDate()){
        console.log("Last Date of the Month")
    }
    else{
        console.log("Not a Last Date of Month");
    }
}
lastDate(date);