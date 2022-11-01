function full_Sentence() {      
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);         // concatenate above strings into single string
    document.getElementById("Concatenate").innerHTML = whole_sentence;  // output single string to html paragraph element
}

function slice_Sentence() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);                        // slice at indices which return "Johnny"
    document.getElementById("Slice").innerHTML = Section;       // output sliced string to html paragraph element
}

function to_Upper() {
    var Stanley = "Did I Stutter?";                             // convert sentence to upper case sentence, which is appropriate when yelling!
    document.getElementById("upper").innerHTML = Stanley.toUpperCase();
}

function search_Fn() {
    var text = "Can you help me look far and wide?";
    var position = text.search("help");                         // search string text for the word "help"
    document.getElementById("search").innerHTML = "\"help\" was found at position " + position;
}

function to_Num() {
    var a_number = 409;                                                                             // create number 409
    document.getElementById("number").innerHTML = "She's real fine my " + a_number.toString();      // convert number 409 to string
}

function precise_Fn() {
    var num = 14.16543215643184;
    document.getElementById("precision").innerHTML = num.toPrecision(5);                            // convert number to precision (5 significant digits)
}

function to_Fixed_Fn() {
    var num = 14.16543215643184;                                                                    
    document.getElementById("fixed").innerHTML = num.toFixed(5);                                    // convert number to 5 decimal places 
}

function value_Of_Fn() {
    var a_string = "Hi how are you today?";                                                         // find value of string
    document.getElementById("value").innerHTML = a_string.valueOf();
}
