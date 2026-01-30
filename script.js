let currentInput = "";

function press(val) {
    // Prevent multiple decimals in a number
    if (val === '.' && currentInput.split(/\+|\-|\*|\//).pop().includes('.')) return;
    currentInput += val;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        if (currentInput.trim() === "") return;
        let result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (e) {
        document.getElementById("display").value = "Error";
        currentInput = "";
    }
}