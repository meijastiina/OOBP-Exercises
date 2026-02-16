// Create constants for the elements
const textareaElement = document.getElementById("textareaElement");
const spanElement = document.getElementById("spanElement");
const pElement = document.getElementById("pElement");
// 1. Once mouse is on textarea, show a
// text "Mouse is on textarea" in span
// element.
textareaElement.onmouseover = function () {
    spanElement.innerHTML = "Mouse is on textarea";
}
// 2. Once mouse has left textarea, empty
// the span.
textareaElement.onmouseout = function () {
    spanElement.innerHTML = "";
}
// 3. Once a value is entered in textarea,
// show a text "Contents of textarea:
// [contents]" in span.
textareaElement.onchange = function () {
    spanElement.innerHTML = "Contents of textarea: " + textareaElement.value;
}
// 4. Once button is pressed, increment the
// value in p by the value in input.
document.getElementById("buttonElement").onclick = function () {
    pElement.innerHTML = Number(pElement.innerHTML) + 1;
}