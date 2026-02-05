function doSomething(x) {
    x++;
    console.log(x);
}
let y = 5;
doSomething(y);
console.log(y);

function addSomethingToArray(numbers) {
    let newArray = numbers.slice();
    newArray.push(9);
    return newArray;
}
let numberArray = [45, 77, 19];
console.table(numberArray);
let newArray = addSomethingToArray(numberArray);
console.table(numberArray);
console.table(newArray);