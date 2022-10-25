
function my_Dictionary(){                                         // function to add 5+5 after click 
    var car = {
        make: "Subaru",
        model: "Crosstrek",
        color: "white",
        drivetrain: "AWD",
        transmission: "CVT",
        year: 2016
    };
    document.getElementById("Dictionary").innerHTML = car.year + " " + car.make + " " + car.model;
}