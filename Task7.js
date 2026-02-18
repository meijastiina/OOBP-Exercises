/***************** TASK 1 *****************************/
// Create a HTML element (button)
const newButton = document.createElement("button");
// Add button text
newButton.innerHTML = "Update text";
// Add button into the page
document.body.appendChild(newButton);
// Event handler for button click
newButton.onclick = function () {
    // This will trigger when user clicks button
    // replace the "Hello world" text above in the paragraph with text "I can modify text"
    document.getElementById("ExampleID").innerHTML = "I can modify text";
    // document.querySelector("p").innerHTML = "test2";
}

/***************** TASK 2 *****************************/
// Create a HTML element (button)
const anotherButton = document.createElement("button");
// Add button text
anotherButton.innerHTML = "Replace div content";
// Add button into the page
document.body.appendChild(anotherButton);
// Event handler for button click
anotherButton.onclick = function () {
    // This will trigger when user clicks button
    // replaces the children of all divs with text "I have replaced everything".
    // get all div elements
    const divs = document.getElementsByTagName("div");
    // for (let index = 0; index < divs.length; index++) {
    //     divs[index].innerHTML = "I have replaced everything";
    // }
    [...divs].forEach(element => {
        element.innerHTML = "I have replaced everything";
    });
    // const elements = document.querySelectorAll("div > *, div:not(:has(*))");
    // [...elements].forEach(element => {
    //     element.innerHTML = "I have replaced everything";
    // });
} 
/***************** TASK 3 *****************************/
// Create a HTML element (button)
const yetAnotherButton = document.createElement("button");
// Add button text
yetAnotherButton.innerHTML = "Insert HTML5 logo and text";
// Add button into the page
document.body.appendChild(yetAnotherButton);
// Event handler for button click
yetAnotherButton.onclick = function () {
    // inserts into a single div containing an image (https://www.w3.org/html/logo/img/html5-display.png) and text "AN HTML5 LOGO". That content should be laid out vertically stacked and centered on the page.
    // create a new div
    const newDiv = document.createElement("div");
    // create element for the image
    const image = document.createElement("img");
    // add image source
    image.src = "https://www.w3.org/html/logo/img/html5-display.png";
    // add the image to newdiv
    newDiv.appendChild(image);
    // create text
    const text = document.createElement("p");
    text.innerHTML = "AN HTML5 LOGO";
    newDiv.appendChild(text);
    // center content
    newDiv.style.textAlign = "center";
    // add the div to page
    document.body.appendChild(newDiv);
}