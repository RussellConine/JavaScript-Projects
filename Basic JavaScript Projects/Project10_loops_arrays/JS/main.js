function Call_Loop() {      // function to use while loop
    var Digit = "";         
    var x = 1;
    while (x < 11) {        
        Digit += x + "<br>";                                    // concat x to digit
        document.getElementById("Loop").innerHTML = Digit;      
        console.log(x);                                         // log value of x in console
        x++;                                                    // increment x
    }
}

function Length_Calc() {                                                                            // function to calculate string length
    var input_string = document.getElementById("in_str").value;                                     // retrieve user's input string
    var len = input_string.length;                                                                  // calc string length
    document.getElementById("Length_Out").innerHTML = "Your string is " + len + " characters long"; // return string length sentence
}

function for_Loop() {                                                                               // function to use for loop
    var instruments = ["Guitar", "Cello", "Tuba"];                                                  // create array of instruments
    var Content = "";
    var i;
    for (i = 0; i < instruments.length; i++) {                                                      // for loop to iterate through objects in array
        Content += instruments[i] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;                             // print out list of instruments to webpage
}


function array_Function() {                                                                         // function that uses array
    var arr = ["Braves", "Marlins", "Mets", "Phillies", "Nationals"];                               // array of strings
    var Content = "";
    for (i = 0; i < arr.length; i++) {
        Content += arr[i] + "<br>";                                                                 // concat strings to Content variable
    }
    document.getElementById("Array").innerHTML = Content;                                           // return Content variable to html page
}

function let_fn() {                                                                         // function that creates object using let
    let plane = {
        manufacturer: "Cessna",
        model: "Skyhawk",
        wingspan: "50ft",
        powerplant: "4 Cyl Piston",
        weight: "1300 lbs",
        cost: "$400,000",
    };     
    document.getElementById("Let_object").innerHTML = "I bought a " + plane.manufacturer + " " + plane.model + " that cost me " + plane.cost + "! :("                     
}