// track current player
let activePlayer = 'X';
// Array stores an array of moves. Used to determine win conditions
let selectedSquares = [];

// Function for placing an x or o in a square.
function placeXOrO(squareNumber) {
    // Ensures a square hasn't been selected already
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retries the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // Condition to check whose turn it is.
        if (activePlayer === 'X') {
            //If active player is equal to 'X', the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // Calls a function to check for win conditions
        checkWinConditions();
        // changes active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // function to play placement sound
        audio('./media/place.mp3');
        // condition to cehck if it's the computer's turn
        if (activePlayer === 'O') {
            // function disables clicking for computer's turn
            disableClick();
            // function to wait 1 second before computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // returning true needed for computersTurn() function to work
        return true;
    }
    // function results in a random square being selected by the computer
    function computersTurn() {
        // this boolen is needed for while loop
        let success = false;
        // variable store a random number 0-8
        let pickASquare;
        //condition allows while loop to keep trying if square is selected already
        while (!success) {
            // random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if randowm number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }

    //This function checks if an array includes 3 strings. It's used to cehck for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        console.log(squareA, squareB, squareC); //////////////////
        // These 3 variable will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 variables passed are all included in the array then true is requrned and else if condition
        // executes the draw line function
        if (a === true && b === true && c === true) {return true;}
    }
}


function disableClick() {
    // makes our body unclickable
    body.style.pointerEvents = 'none';
    // makes our body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string parameter of the path set earlier for placement sound
function audio(audioURL) {
    // create a new audion object and pass the path as a parameter
    let audio = new Audio(audioURL);
    // play method plays the audio sounds
    audio.play();
}


//This function uses HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //This line indicates where the start of a line's x axis is
    let x1 = coordX1,
        // This line indicates where the start of a line's y axis is
        y1 = coordY1,
        // This line indicates where the end of a lines x axis is
        x2 = coordX2,
        // This line indicates where the end of a lines y axis is
        y2 = coordY2,
        // This variable stores temporary x axis data we update in our animation loop
        x = x1,
        // This variable stores temporary x axis data we update in our animation loop
        y = y1;


    //This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration
        c.clearRect(0,0,608,608);
        // This method starts a new path
        c.beginPath();
        // this method moves to a starting point in the line
        c.moveTo(x1, y1);
        // this method indicates the end point in the line
        c.lineTo(x, y);
        // this method sets the width of the line
        c.lineWidth = 10;
        // This method sets the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        // This method draws the line
        c.stroke();
        // This condition checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            // adds 10 to the previous x endpoint
            if (x < x2) { x += 10; }
            // adds 10 to the previous y endpoint
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        
        // Necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        // Line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas
        c.clearRect(0, 0, 608, 608);
        // this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }

    // This line disallows clicking while the win sound is playing
    disableClick();
    // This line plays the win sounds
    audio('./media/winGame.mp3');
    // This line calls the main animation loop
    animateLineDrawing();
    // This line waits 1 sec. then clears navas, resets game, and allows clicking again
    setTimeout(function () {clear(); resetGame(); }, 1000);
} 


function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}