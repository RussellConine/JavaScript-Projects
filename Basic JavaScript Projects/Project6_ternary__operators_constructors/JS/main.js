function Dog(name, breed, fur_type, ear_floppiness) {
    this.name = name;
    this.breed = breed;
    this.fur_type = fur_type;
    this.ear_floppiness = ear_floppiness;
}


function nested() {
    document.write(Count());
    function Count() {
        var starting_point = 9;
        function Plus_one() {
            starting_point += 1;
        }
        Plus_one();
        return starting_point;
    }
}