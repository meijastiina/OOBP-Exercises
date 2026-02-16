// 1. Create a new div element.
const newDiv = document.createElement('div');
// 2. Append it to the body.
document.body.appendChild(newDiv);
// 3. Add text "This is a div" to your
// div.
newDiv.innerHTML = "This <b>is</b> a div";
//newDiv.innerText = "This <b>is</b> a div";
// 4. Add background colour to your
// div, make it 50% width and add
// 10px padding.
newDiv.style.background = "orange";
newDiv.style.width = "50%";
newDiv.style.padding = "10px";
// newDiv.style = "background: orange; width: 50%; padding: 10px;"
// 5. Add a button in your div.
newButton = document.createElement('button');
newButton.innerHTML = 'This is a button';
newDiv.appendChild(newButton);