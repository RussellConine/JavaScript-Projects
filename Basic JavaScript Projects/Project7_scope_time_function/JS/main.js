
// create global var x
var x = 10;

function var_fn() {
    // create local var y
    var y = 20; 
    z = x + y;  // add global var x and local var y
    document.getElementById("var_types").innerHTML = "x + y = " + z;
}

function date_greet() {
    if (new Date().getHours() <12) {
        document.getElementById("greeting").innerHTML = "Good morning!";
    } else if (new Date().getHours() < 17 ) {
        document.getElementById("greeting").innerHTML = "Good afternoon!";
    } else if (new Date().getHours() < 22 ) {
        document.getElementById("greeting").innerHTML = "Good evening!";
    } else {
        document.getElementById("greeting").innerHTML = "Go to bed it's late!";
    }
}

function f2(){
    console.log("value of x is " + x);
    console.log("value of y is " + y);      // this line will error out since y is undefined
    z = x + y;      // y is not defined (x is global var, y defined above is local, so it's outside scope of f2)
    document.write("x + y = " + z);
    console.log("x + y = " + z);        // 
}

function Time_function() {
    var time = new Date().getHours();       // returns numeric value of hours
    var Reply;                              // creates empty var for later assignment
    if (time < 12 == time > 0) {            // returns true if morning hours 
        Reply = "It's morning time.";       
    } else if (time >= 12 == time < 18) {   // returns true if afternoon hours 
        Reply = "It's afternoon."; 
    } else {                                // if it's neither morning nor afternoon, then it's evening
        Reply = "It's evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;       // write value of Time_of_day to paragraph element in HTML
}

f2();       // run f2 so we can see error in console