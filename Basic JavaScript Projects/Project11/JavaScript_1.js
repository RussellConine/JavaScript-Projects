function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}


// var c = document.getElementById("ID_Name");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(200, 50, 40, 0, 2 * Math.PI);
// ctx.arc()
// ctx.stroke();


var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 250);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250)


