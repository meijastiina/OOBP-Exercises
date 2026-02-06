const _ = require('lodash');

const printMessage = ( name, message ) => console.log(name, ": ", message );
const curried = _.curry(printMessage);
const printMessageForJohn = curried('John');
printMessage("John", "Hello!");
printMessageForJohn('Curry is tasty!');
