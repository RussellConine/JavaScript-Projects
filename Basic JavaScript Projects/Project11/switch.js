function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value.toLowerCase();
    var Color_String = " is a great color";
    switch(Colors) {
        case "red":
            Color_Output = "Red" + Color_String;
        break;
        case "yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "green":
            Color_Output = "Green" + Color_String;
        break;
        case "blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "purple":
            Color_Output = "Purple is Prince's favorite color!";
        break;
        default:
            Color_Output = "Invalid color selected";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}