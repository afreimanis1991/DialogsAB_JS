console.log("Pirms: " + document.cookie);

// var cookieText = "name=admin; path=/; Expires=10 Jan 2022 18:22:00 GMT";
var cookieText = "name=admin; path=/; Max-age=300;";
document.cookie = cookieText;
console.log("Pec: " + document.cookie);

var cookieText1 = "username1=admin1";
document.cookie = cookieText1;
console.log("Pec (1): " + document.cookie);

var cookieText2 = "username2=admin2";
document.cookie = cookieText2;
console.log("Pec (2): " + document.cookie);