var year=document.getElementById("year")
var month=document.getElementById("month")
var day=document.getElementById("day")
var result=document.getElementById("result")

function calculate(){
var dates=new Date(year.value, month.value, day.value);
var days=dates.getDay();

switch (days){
    case 0:result.innerHTML="Sunday";break;
    case 1:result.innerHTML="Monday";break;
    case 2:result.innerHTML="Tuesday";break;
    case 3:result.innerHTML="Wednesday";break;
    case 4:result.innerHTML="Thursday";break;
    case 5:result.innerHTML="Friday";break;
    case 6:result.innerHTML="Saturday";break;
}
}