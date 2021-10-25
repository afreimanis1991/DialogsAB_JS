try {
    document.getElementById("demo1").innerHTML = "Izdruka no external script";
}
catch (err) {
    document.getElementById("error").innerHTML = "Kluda no external script" + err;
}
