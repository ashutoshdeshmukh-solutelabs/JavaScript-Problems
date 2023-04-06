// function printArray(arr, n) {
//   let newArr = arr.reduce((res, ele) => res + ' ' + ele, '');
//   return newArr;
// }

function printArray(arr, n) {
  console.log(arr.join(' '));
}

arr = [1, 2, 3, 4, 5];
console.log(printArray(arr, arr.length));
