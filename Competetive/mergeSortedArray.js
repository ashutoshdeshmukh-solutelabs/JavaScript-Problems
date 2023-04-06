// Take all the elements of arr1 and arr2 in arr3. Then simply sort the arr3.

function merge(arr1, arr2, n, m) {
  //your code here
  let i = 0;
  let j = 0;
  let k = 0;
  let arr3 = [];
  // traverse the arr1 and insert its element in arr3
  while (i < n) {
    arr3[k++] = arr1[i++];
  }
  // now traverse arr2 and insert in arr3
  while (j < m) {
    arr3[k++] = arr2[j++];
  }
  // sort the whole array arr3
  arr3.sort();
  return arr3;
}

let arr1 = [1, 3, 5, 7];
let n = arr1.length;
let arr2 = [2, 4, 6, 8];
let m = arr2.length;
console.log(merge(arr1, arr2, n, m));
