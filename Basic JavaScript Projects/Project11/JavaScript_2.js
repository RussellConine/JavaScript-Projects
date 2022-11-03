function Validation() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let phone = document.forms["myForm"]["phone"].value;

    if (!fname || !lname) {
        alert("First and Last name must be filled out")
    } else if (!phone) {
        alert("Phone Number must be filled out")
    } else {
        document.getElementById("received").innerHTML = "Thanks we've received your info";
    }
}