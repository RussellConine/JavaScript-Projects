function count_to_Ten() {                                           // fn to use while loops
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;                                        // concat x to Digit variable
        x++;                                                        // increment x
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;   // return Digit to html page
}