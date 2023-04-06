/*
Sort an array of 0s, 1s and 2s

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
*/

function sort012(arr, N) {
  let zero = [];
  let one = [];
  let two = [];
  for (var i = 0; i < N; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    }
    if (arr[i] === 1) {
      one.push(arr[i]);
    }
    if (arr[i] === 2) {
      two.push(arr[i]);
    }
  }

  let arr2 = [...zero, ...one, ...two];
  for (var i = 0; i < arr2.length; i++) {
    arr[i] = arr2[i];
  }
  return arr;
}
