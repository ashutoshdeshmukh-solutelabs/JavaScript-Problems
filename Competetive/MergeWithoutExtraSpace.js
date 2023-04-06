/*
Use a for loop in arr1.

Whenever we get any element in arr1 which is greater than the first element of arr2,swap it.

Rearrange arr2.

Repeat the process.
*/

function merge(arr1, arr2, n, m) {
  //your code here
  // take first element from arr1 compare it with first element of second array if condition match, then swap
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (arr1[i] > arr2[0]) {
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr1[0] = temp;
    }
    // then sort the second array put the element in its correct position so that next cycle can swap elements correctly
    let first = arr2[0];
    for (k = 1; k < m && arr2[k] < first; k++) {
      arr2[k - 1] = arr2[k];
    }
    arr2[k - 1] = first;
  }
  console.log('arr1[] = ' + arr1);
  console.log('arr2[] = ' + arr2);
}

let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
let n = arr1.length;
let m = arr2.length;
merge(arr1, arr2, n, m);
