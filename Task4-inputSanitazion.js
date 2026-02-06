/*
Create a function that cleans up user input. It needs to do the following:
Trim whitespace
Turn lowercase
Capitalize the first letter

First use separate functions and then compose a new function to do all this.
*/
const { floor, flow } = require("lodash");

const trimWhitespace = str => str.trim();
const toLower = str => str.toLowerCase();
const capitalize = str => str[0].toUpperCase() + str.slice(1);

let userInput = "  this IS fun  ";
console.log(userInput);
userInput = trimWhitespace(userInput);
console.log(userInput);
userInput = toLower(userInput);
console.log(userInput);
userInput = capitalize(userInput);
console.log(userInput);

let userInput2 = "  jfklsdUREWIUmfslf";
const compositeClean = flow(trimWhitespace, toLower, capitalize);
console.log(compositeClean(userInput2));