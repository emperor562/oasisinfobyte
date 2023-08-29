function convertCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusOutput = document.getElementById("celsius");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var celsiusValue = (fahrenheitValue - 32) * 5 / 9;

    celsiusOutput.value = celsiusValue.toFixed(2);
}

function convertFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("fahrenheit");

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
}

function resetForm() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    celsiusInput.value = "";
    fahrenheitInput.value = "";
}
