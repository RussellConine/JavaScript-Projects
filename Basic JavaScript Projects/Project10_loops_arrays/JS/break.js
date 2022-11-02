function break_fn(){                    // function to utilize break statement
    let text = "";                      // initialized text variable using let
    for (let i = 0; i < 10; i++) {      // for loop from 0 to 9
        if (i === 3 ) { break; }        // break out of for loop when i equals 3
        text += "Number is " + i + "<br>";  // concat i with html html character
    }
    document.getElementById("Break_Out").innerHTML = text;  // print number is 0, 1, 2 to html page
}

function continue_fn(){             // function to utilize continue statement
    let text = "";                  // initialized text variable using let
    for (let i = 0; i < 10; i++) {
        if (i === 3 ) { continue; } // go back to top of for loop for i = 3
        text += "Number is " + i + "<br>";  
    }
    document.getElementById("cont").innerHTML = text;   // print 0,1,2,4,5..10 (skip 3)
}