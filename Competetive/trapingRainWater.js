function trappingWater(arr, n) {
  //your code here
  //   let left = [];
  //   let right = [];
  let left = new Array(n);
  let right = new Array(n);

  let ans = 0;

  left[0] = arr[0];

  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }

  right[n - 1] = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  for (let i = 0; i < n; i++) {
    ans = ans + Math.min(left[i], right[i]) - arr[i];
  }

  return ans;
}

let arr = [3, 1, 2, 4, 0, 1, 3, 2];
console.log(trappingWater(arr, arr.length));


// let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// // Method for maximum amount of water
// function findWater(n) {
//   // left[i] contains height of tallest bar to the
//   // left of i'th bar including itself
//   let left = new Array(n);

//   // Right [i] contains height of tallest bar to
//   // the right of ith bar including itself
//   let right = new Array(n);

//   // Initialize result
//   let water = 0;

//   // Fill left array
//   left[0] = arr[0];
//   for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], arr[i]);

//   // Fill right array
//   right[n - 1] = arr[n - 1];
//   for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], arr[i]);

//   // Calculate the accumulated water element by element
//   // consider the amount of water on i'th bar, the
//   // amount of water accumulated on this particular
//   // bar will be equal to min(left[i], right[i]) - arr[i] .
//   for (let i = 0; i < n; i++) water += Math.min(left[i], right[i]) - arr[i];

//   return water;
// }
// console.log('====================================');
// console.log(findWater(arr.length));
// console.log('====================================');
