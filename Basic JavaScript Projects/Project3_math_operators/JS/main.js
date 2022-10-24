
function Addition() {                                         // function to add 5+5 after click 
    var x = 5 + 5;
    document.getElementById("Addition_element").innerHTML = "5 + 5 = " + x;
}

function Subtraction() {                                         // function to subtract 8-5 after click 
    var x = 8 - 5;
    document.getElementById("Subtraction_element").innerHTML = "8 - 5 = " + x;
}

function Multiplication() {                                         // function to multiply 9*3 after click 
    var x = 9 * 3;
    document.getElementById("Multiplication_element").innerHTML = "9 * 3 = " + x;
}

function Division() {                                         // function to divide 12 by 3 after click 
    var x = 12 / 3;
    document.getElementById("Division_element").innerHTML = "12 / 3 = " + x;
}

function Modulus() {                                         // function to display modulus of 13 and 3
    var x = 13 % 3;
    document.getElementById("Modulus_element").innerHTML = "13 % 3 = " + x;
}

function Increment() {                                         // function to incremenet 8 after click
    var x = 8;
    x++;
    document.getElementById("Increment_element").innerHTML = "8++ = " + x;
}

function Decrement() {                                         // function to decrement 8 after click 
    var x = 8;
    x--;
    document.getElementById("Decrement_element").innerHTML = "8-- = " + x;
}

function Rando() {                                         // function to display 
    var x = Math.round(Math.random()*10);
    document.getElementById("Random_element").innerHTML = "A random integer between 0 and 10 is " + x;
}
