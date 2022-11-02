function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += x + "<br>";
        document.getElementById("Loop").innerHTML = Digit;
        console.log(x);
        x++;
    }
}

function Length_Calc() {
    var input_string = document.getElementById("in_str").value;
    var len = input_string.length;
    document.getElementById("Length_Out").innerHTML = "Your string is " + len + " characters long";
}

function for_Loop() {
    var instruments = ["Guitar", "Cello", "Tuba"];
    var Content = "";
    var i;
    for (i = 0; i < instruments.length; i++) {
        Content += instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_Function() {
    var arr = ["Braves", "Marlins", "Mets", "Phillies", "Nationals"];
    var Content = "";
    for (i = 0; i < arr.length; i++) {
        Content += arr[i] + "<br>";
    }
    document.getElementById("Array").innerHTML = Content;
}