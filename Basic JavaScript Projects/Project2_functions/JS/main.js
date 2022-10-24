
function My_First_Function() {                          // function to change button text after click 
    var str1 = "This is the button text!";

    document.getElementById("Button_Text_1").innerHTML = str1;
}

function MyFunction() {                                 // function to change paragraph text after click 
    var sentence = "I am learning";                     // assign string to variable
    sentence += " a lot from this book!";               // concatentate sentence variable
    document.getElementById("Concatenate").innerHTML = sentence;    // display concatenated string in paragraph element on click
}