window.alert("Hello World!!");                                  // creates alert window displaying text

var x = 'Don\'t you forget about me\nDon\'t Don\'t Don\'t Don\'t', y = 'Will you stand above me?\n Look my way, never love me'; // song lyrics using backslash to excape single quotes

var Sent1 = "This is the beginning of the string";
var Sent2 = "and this is the end of the string";
document.write(Sent1 + " " + Sent2);                            // writes text of concatenated strings

var z = 10*20;                                                  // expression multiplying two numbers; result of expression is unused

function My_First_Function() {                                  // function to change button text after click 
    var str = "This is the button text!";

    document.getElementById("Button_Text").innerHTML = str;
}

function Alert_Function() {                                  // function to change button text after click 
    window.alert("Finally, you put my mouse on top");
}