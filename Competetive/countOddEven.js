/*
Count Odd Even

Given an array A[] of N elements. The task is to count number of even and odd elements in the array.
*/

function countOddEven(arr, n) {
  let oddCount = 0;
  let evenCount = 0;
  arr.forEach((element) => {
    if (element % 2 == 0) evenCount++;
    else oddCount++;
  });
  console.log(oddCount, evenCount);
}

let arr = [1, 2, 3, 4, 5];
console.log(countOddEven(arr, arr.length));
