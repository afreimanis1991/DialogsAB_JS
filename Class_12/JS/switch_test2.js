function getcar() {
    
    switch (document.getElementById("cars").value){
  case "volvo":
    cars = "volvo";
    break;
  case "nissan":
    cars = "nissan";
    break;
  case "audi":
    cars = "audi";
    break;
  case "opel":
    cars = "opel";
    break;
  
}
document.getElementById("demo").innerHTML = "Es izvelos " + cars;
}