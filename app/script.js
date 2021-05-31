/**** Basic Calculator logic  */
var elements = document.getElementsByClassName("a-button");
var numberRegex = new RegExp("^[0-9]$");
var n1 = ""; //numerator 1
var n2 = ""; // numerator 2
var operatorPressed = false;
var startNewNumerator = false; 
var plus = false;
var minus = false;
var divide = false;
var multiply = false;
var equalsPressedWithoutOperator = false;


var buttonClick = function (e) {
  e.preventDefault();
  let valPressed = e.srcElement.innerText;
  if (valPressed === "DEL") {
    deletePressed();
  } else if (valPressed === "RESET") {
    resetPressed();
  } else if (valPressed === "=") {
    equalsPressed();
    startNewNumerator = true;
  } else if (numberRegex.test(valPressed) || valPressed === ".") {
    numberPressed(valPressed);
    startNewNumerator = false;
  } else if (valPressed === "+") {
    allFalse();
    operatorPressed = true;
    plus = true;
    startNewNumerator = true;
  } else if (valPressed === "-") {
    allFalse();
    operatorPressed = true;
    minus = true;
    startNewNumerator = true;
  } else if (valPressed === "X") {
    allFalse();
    operatorPressed = true;
    startNewNumerator = true;
  } else if (valPressed === "/") {
    allFalse();
    operatorPressed = true;
    startNewNumerator = true;
  }
  return false;
};

function numberPressed(valPressed) {
  if (!operatorPressed) {
    n1 += valPressed;
    document.querySelector(".result>h1").innerHTML = n1;
  } else {
    if (startNewNumerator) {
      n1 = n2;
      n2 = valPressed;
    } else {
      n2 += valPressed;
    }
    document.querySelector(".result>h1").innerHTML = n2;
  }
}
function equalsPressed() {
  if (operatorPressed == false) {
    equalsPressedWithoutOperator = true;
    operatorPressed = true;
  } else {
    if (equalsPressedWithoutOperator && n2 !== "") {
      n1 = n2;
      n2 = "";
    } else {
      if (n1 === "") {
        n1 = 0;
      }
      if (plus) {
        n1 = parseFloat(n1) + parseFloat(n2);
      } else if (minus) {
        n1 = parseFloat(n1) - parseFloat(n2);
      } else if (divide) {
        n1 = parseFloat(n1) / parseFloat(n2);
      } else if (multiply) {
        n1 = parseFloat(n1) * parseFloat(n2);
      }
    }
  }
  document.querySelector(".result>h1").innerHTML = n1;
}
function resetPressed() {
  n1 = "";
  n2 = "";
  allFalse();
  document.querySelector(".result>h1").innerHTML = 0;
}
function deletePressed() {
  if (operatorPressed == false) {
    if (n1.length > 1) {
      n1 = n1.slice(0, -1);
    } else {
      n1 = "";
    }
    document.querySelector(".result>h1").innerHTML = n1;
  } else {
    if (n2.length > 1) {
      n2 = n2.slice(0, -1);
    } else {
      n2 = "";
    }
    document.querySelector(".result>h1").innerHTML = n2;
  }
}

function allFalse() {
  operatorPressed = true;
  equalsPressedWithoutOperator = false;
  plus = false;
  minus = false;
  divide = true;
  multiply = false;
  startNewNumerator = false;
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", buttonClick);
}

/*** Toggle code */
var togglePosition = 0;
var toggleArea = document.getElementsByClassName("toggle-grid");
toggleArea[0].addEventListener("click", toggleClick);

function toggleClick() {
  if (togglePosition === 0) {
    togglePosition = 1;
    document
      .querySelector(".red-dot")
      .style.setProperty("transform", "translateX(4em)");
    document.querySelector("body").className = "theme2";
  } else if (togglePosition === 1) {
    togglePosition = 2;
    document
      .querySelector(".red-dot")
      .style.setProperty("transform", "translateX(7.5em)");
    document.querySelector("body").className = "theme3";
  } else {
    togglePosition = 0;
    document
      .querySelector(".red-dot")
      .style.setProperty("transform", "translateX(0em)");
    document.querySelector("body").className = "theme1";
  }
}
