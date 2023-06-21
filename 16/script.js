var images = document.querySelectorAll("img");

function showSrc(element) {
  var src = element.getAttribute('src');
  alert(src);
}

var adding = document.getElementById("addEvent");
var removing = document.getElementById("removeEvent");
adding.addEventListener("click", eventAddRemove);
removing.removeEventListener("click", eventAddRemove);

function eventAddRemove() {
  adding.setAttribute("title", "New Event");
}

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

link1.addEventListener("mouseover", appendHref);
link1.addEventListener("mouseout", removeHref);

link2.addEventListener("mouseover", appendHref);
link2.addEventListener("mouseout", removeHref);

link3.addEventListener("mouseover", appendHref);
link3.addEventListener("mouseout", removeHref);

function appendHref(event) {
  var link = event.target;
  var href = link.getAttribute("href");
  var text = link.textContent;
  link.textContent = text + " (" + href + ")";
}

function removeHref(event) {
  var link = event.target;
  var text = link.textContent;
  link.textContent = text.replace(/\s\(.*\)$/, "");
  link.removeEventListener("mouseover", appendHref);
}

input1 = document.getElementById("input1");
input2 = document.getElementById("input2");
input3 = document.getElementById("input3");
demo = document.getElementById("demo");

input1.addEventListener("blur", displayValue);
input2.addEventListener("blur", displayValue);
input3.addEventListener("blur", displayValue);

function displayValue(event) {
  var input = event.target;
  var value = input.value;
  demo.textContent = value;
  input.value = "";
}

input1.addEventListener("blur", alertValue);
input2.addEventListener("blur", alertValue);
input3.addEventListener("blur", alertValue);
var firstClick = true;

function alertValue(event) {
  if (firstClick) {
    var input = event.target;
    var value = input.value;
    alert(value);
    firstClick = false;
  }
}

var numParagraph = document.querySelectorAll(".numb");

function numParagraphPower(element) {
  var number = parseInt(element.textContent);
  var square = number * number;
  element.textContent = square;
}

var input = document.querySelectorAll(".inputTask8");
function checkLength(input) {
  var expectedLength = parseInt(input.dataset.length);
  var actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

function changeToRed() {
  div1.style.backgroundColor = "red";
  div1.removeEventListener("click", changeToRed);
  div1.addEventListener("click", changeToGreen);
}

function changeToGreen() {
  div1.style.backgroundColor = "green";
  div1.removeEventListener("click", changeToGreen);
  div1.addEventListener("click", changeToRed);
}
