// create global var x
var x = 10;

function f1(){
    // create local var y
    var y = 20;
    z = x + y;
    document.write("x + y = " + z);
}

function f2(){
    z = x + y;
    document.write("x + y = " + z);
    console.log("x + y = " + z);
}

f1();
f2();