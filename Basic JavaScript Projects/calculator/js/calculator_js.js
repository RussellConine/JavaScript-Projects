// Creates and object to track values
const Calculator = {
    // Display 0 on calc screen
    Display_Value: '0',
    // Hold first operand for any expressions, initially set to null
    First_Operand: null,
    // Checks whether or not scond operand has been input by user
    Wait_Second_Operand: false,
    // this will hold operator, set to null for now
    operator: null,
};

// Modifies values each time button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    // Checks if the Wait_Second_Operand is true and sets Display_Value to key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Overwrites Display_Value if current value is 0, other wise adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    } 
}

// Section that handles decimal points
function Input_Decimal(dot) {
    // Ensures that accidental clicking of decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // If Display_Value doesn't contain a decimal point, we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// Section that handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    // When operator key is pressed, convert current number displayed on screen to number the store the 
    // result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // Checks if operator already exists and if Wait_Second_Operand is true, then updates operator and exist function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for the operator in the Perform_Calculation object and the fn 
        // that matches the operator is executed
    
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        // Remove any trailing zeroes
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;  
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand, 
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand, 
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand, 
    '=': (First_Operand, Second_Operand) => Second_Operand, 
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}


// this function updates calc screen w content of Display_Value
function Update_Display() {
    // makes use of calculator-screen class to target input tag in html doc
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// section to monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Target variable is an object that represents the element that was clicked
    const { target } = event;
    // If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // Ensures that AC clears all inputs from the calc screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})