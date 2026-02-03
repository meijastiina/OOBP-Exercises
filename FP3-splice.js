/*
Create function called pureSplice() which accepts an array (all elements are numbers) and returns
a new array with elements removed in similar fashion as regular splice(startingIndex,
deleteCount).
*/
const values = [5, 11, 394, 2, 576];
values.splice(2, 1);
console.table(values);

const values2 = [5, 11, 394, 2, 576];
function pureSplice(array, start, deleteCount) {
    return array.toSpliced(start, deleteCount);
}
console.table(values2);
let newArray = pureSplice(values2, 2, 1);
console.table(values2);
console.table(newArray);