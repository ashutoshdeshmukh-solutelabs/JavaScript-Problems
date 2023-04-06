/* 
Input:
N = 6
arr[] = { 1, 2, 3, 4, 5, 5 }
Key = 5
Output:  4 5
Explanation:
5 appears first time at index 4 and
appears last time at index 5.
(0 based indexing)
*/

function findIndex(arr, n, key) {
  //code here
  let index = [-1, -1];
  for (let i = 0; i < n; i++) {
    if (arr[i] == key) {
      index[0] = i;
      break;
    }
  }
  for (let i = n; i >= 0; i--) {
    if (arr[i] == key) {
      index[1] = i;
      break;
    }
  }
  return index;
}

let arr = [1, 2, 3, 4, 5, 5];
console.log(findIndex(arr, arr.length, 5));
