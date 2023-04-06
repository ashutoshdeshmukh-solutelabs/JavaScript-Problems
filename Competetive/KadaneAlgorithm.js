// Kadane's Algorithm

// function maxSubarraySum(arr, N) {
//   // code here
//   let sum = arr[0];
//   let maxTillnow = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     maxTillnow = Math.max(arr[i], maxTillnow + arr[i]);
//     sum = Math.max(sum, maxTillnow);
//   }

//   return sum;
// }

function maxSubarraySum(a, N) {
  let maxSum = 0;
  let curSum = 0;

  for (let i = 1; i < N; i++) {
    curSum = curSum + a[i];
    if (curSum > maxSum) maxSum = curSum;
    if (curSum < 0) curSum = 0; //because we don't want negative values
  }
  return maxSum;
}

let arr = [5, -4, -2, 6, -1];
console.log(maxSubarraySum(arr, arr.length));
