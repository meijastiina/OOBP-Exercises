/* Write a pure version of a function which finds minimum value in an array.
*/

/* impure version */
const values = [1, 999, 533,235,223,56,88,2,6,88,664];
function minValue() {
    let min = null;
    for(let i = 0; i < values.length; i++) {
        if((min == null) || (values[i] < min)) {
            min = values[i];
        }
    }
    return min;
}
const minimum = minValue();
console.log(minimum);

// pure
const values2 = [1, 999, 533,235,223,56,88,2,6,88,664];
function minValue2(values) {
    let min = null;
    for(let i = 0; i < values.length; i++) {
        if((min == null) || (values[i] < min)) {
            min = values[i];
        }
    }
    return min;
}
const minimum2 = minValue2(values2);
console.log(minimum2);