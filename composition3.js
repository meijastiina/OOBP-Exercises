const flow = require('lodash/flow');
const increment = x => x + 1;
const double = x => x * 2;

const piped = flow([increment, double]);

console.log(piped(3)); // 8
