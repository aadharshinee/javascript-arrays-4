// 1. Removing array items by index
function removeItemByIndex(arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}
  let array1 = [1, 2, 3, 4, 5];
  console.log(removeItemByIndex(array1, 2));

// 2. Inserting items at a specific position
function insertItemAt(arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
}
 let array2 = [1, 2, 4, 5];
console.log(insertItemAt(array2, 2, 3)); 

// 3. Sorting arrays with complex objects
function sortArrayByProperty(arr, property) {
    return arr.sort((a, b) => (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0);
}
let array3 = [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'Bill', age: 35}];
console.log(sortArrayByProperty(array3, 'age')); 

// 4. Finding the longest string in an array
function findLongestString(arr) {
    return arr.reduce((a, b) => (a.length > b.length) ? a : b, "");
}
let array4 = ['short', 'longer', 'longest', 'tiny'];
console.log(findLongestString(array4)); 

// 5. Rotating an array
function rotateArray(arr, steps) {
    steps = steps % arr.length;
    return arr.slice(-steps).concat(arr.slice(0, -steps));
}
 let array5 = [1, 2, 3, 4, 5];
console.log(rotateArray(array5, 2)); 

// 6. Generating an array of a range
function generateRange(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
}
console.log(generateRange(3, 7)); 

