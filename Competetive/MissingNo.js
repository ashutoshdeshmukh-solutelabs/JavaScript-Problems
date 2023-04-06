/* 
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

Example 1:

Input:
N = 5
Arr = {1,2,3,5} = 11
Arr = [1,2,3,4,5] = 15
Output: 4
*/

//fist finding sum of n naturel num - n=4 = 1+2+3+4+5
function missingNo(arr, n) {
  let total = ((n + 1) * n) / 2;
  //              4+1=5   *  4+2=6 /2
  //                  5   *  6 / 2
  //                    30/2 = 15
  let arrSum = 0;
  arr.forEach((x) => {
    arrSum = arrSum + x;
  });
  let missNo = total - arrSum;
  return missNo;
}

let arr = [1, 2, 3, 5];
let n = arr.length;
console.log(missingNo(arr, n));
