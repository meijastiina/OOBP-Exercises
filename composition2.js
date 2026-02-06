const double = x => x * 2;
const increment = x => x + 1;
const compose = (...fns) =>
    x => fns.reduceRight((v, fn) => fn(v), x);
const composed = compose(double, increment);

console.log(composed(3)); 