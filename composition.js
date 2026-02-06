const double = x => x * 2;
const increment = x => x + 1;

const composed = x => double(increment(x));

console.log(composed(3)); 