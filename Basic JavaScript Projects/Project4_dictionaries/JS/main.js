
function my_Dictionary(){               // function to create dictionary
    var car = {                         // car object contains car properties
        make: "Subaru",
        model: "Crosstrek",
        color: "white",
        drivetrain: "AWD",
        transmission: "CVT",
        year: 2016                      // year stored as number instead of string
    };
    
    document.write(car.color + " " + car.year + " " + car.make + " " + car.model + " ");    // write description of car object using properties
    delete car.color                                                                        // delete color from object
    document.write(car.color + " " + car.year + " " + car.make + " " + car.model);          // show color as undefined since it was deleted in the previous line
}