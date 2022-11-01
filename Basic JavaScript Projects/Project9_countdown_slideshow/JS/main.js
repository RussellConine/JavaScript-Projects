function countdown() {
    var seconds = document.getElementById("seconds").value;     // retrieves second count from user

    function tick() {                                           // function to "tick" timer down
        seconds = seconds - 1;                                  // decrement seconds value
        timer.innerHTML = seconds;                              // write secons value to timer paragraph HTML element
        var time = setTimeout(tick, 1000);                      // pause tick function for 1s
        if (seconds == -1) {                                    // function to show alert once time ihas passed zero
            alert("Time's up!");
            clearTimeout(time);                                 // cancels timeout on variable time from line 7
            timer.innerHTML = "";                               // removes second value from timer paragraph HTML element
        }
    }
    tick();                                                     // calls tick function
}

