// Find the frequency of elements in array
// const arr = ['hello', 'world', 'java', 'hello', 'java'];
const arr = [2, 2, 3, 4, 1, 3, 5, 6, 4, 7, 8, 4, 46, 0, 0, 0, 2, 1];

const occurrences = arr.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

console.log(occurrences);

// function countFreq(element) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countFreq('java'));
