document.write("type of \"Word\": " + typeof "Word");   // check type of a string
document.write("<br>");                                 // write new line char to html 
document.write("type of 3: " + typeof 3);               // check type of a number
document.write("<br>");
document.write("\"5\" + 5: " + "5" + 5);                // concat string w type coercion
document.write("<br>");
document.write("isNaN(\"Hello\"): " + isNaN("Hello"));  // check if string is Nan
document.write("<br>");
document.write("isNaN(50): " + isNaN(50));              // check if number is not a number ¯\_(ツ)_/¯
document.write("<br>");
document.write("2e311: "+ 2e311);                       // write value of infinity
document.write("<br>");
document.write("2e311: " + -2e311);                     // write value of negative infinity
document.write("<br>");
var a = 10>2;
document.write("10 > 2: " + a);                         // write true bool using greater than
document.write("<br>");
var b = 10>12;
document.write("10 > 12: " + b);                        // write false bool using greater than
document.write("<br>");
var c = 12==13;
document.write("12==13: " + c);                         // write false bool using equality comparison
document.write("<br>");
var d = 12==12;
document.write("12==12: " + d);                         // write true bool using equality comparison                         
document.write("<br>");
var e = 12===12;
document.write("12===12: " + e);                        // return true and match data type
document.write("<br>");
var f = 12==="13";
document.write("12===\"13\": " + f);                    // return false by diferent data type and different value
document.write("<br>");
var g = 12==="12";
document.write("12===\"12\": " + g);                    // return false by diferent data type and same value
document.write("<br>");
var h = 12===13;
document.write("12===13: " + h);                        // return false by diferent data type and same value


console.log(1>2);                                       // write false to console


document.write("<br>");
document.write("<br>");

var i = 2 < 4 && 2 > 1;
document.write("2 < 4 && 2 > 1: " + i);     // write true using and operator
document.write("<br>");                 

var j = 2 < 4 && 2 < 1;
document.write("2<4 && 2 < 1: " + j);       // write false using and operator
document.write("<br>");    

var k = 2 < 4 || 2 < 1;
document.write("2 < 4 || 2 < 1: " + k);     // write true using or operator
document.write("<br>");                 

var l = 2 > 4 || 2 < 1; 
document.write("2 > 4 || 2 < 1: " + l);     // write false using or operator

document.write("<br>"); 
document.write("<br>");

var cool = 2 > 1;
document.write("!(2>1): " + !cool);         // write false using not operator

document.write("<br>");
var cool2 = 2 < 1;
document.write("!(2>1): " + !cool2);        // write true using not operator