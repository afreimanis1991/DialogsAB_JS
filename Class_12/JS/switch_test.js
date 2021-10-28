let day = "";
let dayg = "";

switch (new Date().getDay()) {
  case 0:
  case 6:    
   day = "weekends day";
   break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "non weekend day";
    break;
    default:
        dayg="error - such number isnt possible";
}
document.getElementById("demo").innerHTML = "Today is " + day;



function test1() {
    let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

}