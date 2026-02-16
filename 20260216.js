document.getElementById("alertButton").onclick = function () {
    //alert('Hello!');
    let span = document.createElement("span");
    span.innerHTML = "test";
    span.style.color = "blue";
    document.getElementById("myParagraph").appendChild(span);
}