/*

Create a function printMessage().
Parameters: name and message. 
Prints out [name]: [message]
Implement currying for sending messages to a specific person i.e. printMessageForJohn().
*/
const printMessage = ( name, message ) => console.log(name, ": ", message );
const printMessageForJohn = (message) => printMessage("John", message);
printMessage("John", "Hello!");
printMessageForJohn("Howzit!");
printMessage("Jane", "Hello!");