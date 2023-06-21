function calculate() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");

    if (celsiusInput.value !== "") {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      resultElement.textContent = "(" + celsius + "°C * (9/5)) + 32 = " + fahrenheit.toFixed(2) + "°F";
    } else if (fahrenheitInput.value !== "") {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
      resultElement.textContent = "(" + fahrenheit + "°F - 32) / 5/9 = " + celsius.toFixed(2) + "°C";
    } else {
      resultElement.textContent = "Please enter a value.";
    }
  }
  
  function clearInput() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").textContent = "";
  }