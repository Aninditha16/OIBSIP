let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar() {
  if (celsius.value !== "") {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
  } else {
    fahrenheit.value = "";
  }
}

function farToCel() {
  if (fahrenheit.value !== "") {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
  } else {
    celsius.value = "";
  }
}
