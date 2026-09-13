const display = document.getElementById("display");


// Add number or operator

function addValue(value) {

    display.value += value;

}


// Clear display

function clearDisplay() {

    display.value = "";

}


// Delete last character

function deleteNumber() {

    display.value =
        display.value.slice(0, -1);

}


// Calculate result

function calculate() {

    try {

        display.value = eval(display.value);

    }

    catch (error) {

        display.value = "Error";

    }

}