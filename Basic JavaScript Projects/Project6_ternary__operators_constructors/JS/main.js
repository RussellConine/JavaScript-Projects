
function Rental_Function() {                                                            // function to use ternary operators
    var Age, Can_rent;                                                                  // define age and boolean Can_rent variables
    Age = document.getElementById("Age").value;                                         // get user's age from webpage
    Can_rent = (Age < 25) ? "You are too young":"You are old enough";                   // ternary operator, compares users age to 25
    document.getElementById("Rent").innerHTML = Can_rent + " to rent a car.";           // output decision to html 
}

function Dog(name, breed, fur_type, ear_floppiness) {                                           // constructor function of Dog class with attributes name, breed fur type, and ear floppiness
    this.name = name;
    this.breed = breed;
    this.fur_type = fur_type;
    this.ear_floppiness = ear_floppiness;                                                       // just how floppy are those ears??
}

function About_My_Dog() {                                                                       // function to create dog object
    var my_dog = new Dog("Wallowa", "Basset Hound", "short-haired", "extremely floppy");        // create dog object
    document.getElementById("doggy").innerHTML = "My dog " + my_dog.name + " is a " + my_dog.breed + " with " + my_dog.fur_type + " fur " + " and " + my_dog.ear_floppiness + " ears!";
}

function nested() {                                                                 // demonstrate nested functions
    document.getElementById("movie_rating").innerHTML = "I would say that movie was a " + Pick_A_Number() + " out of 10.";
    function Pick_A_Number() {                  
        var rand_decimal = Math.random();                                           // pick a random decimal between 0 and 1
        function Rating_System() {
            var rating = Math.ceil(rand_decimal*10);                                // fn to convert decimal to 1-10 scale      
            return rating;
        }
        rating1_to_10 = Rating_System();                                            // call fn to convert to 1-10 scale
        return rating1_to_10;                                                       // return 1-10 rating to string to be written to HTML                                        
    }
}
