const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function applyFunc(func) {
  try {
    const expression = display.value;
    const evaluated = eval(expression);  // First, evaluate the expression
    let result;

    switch (func) {
      case "square":
        result = evaluated ** 2;
        break;
      case "cube":
        result = evaluated ** 3;
        break;
      default:
        throw new Error("Unknown function");
    }

    display.value = result;
  } catch {
    display.value = "Error";
  }
}
