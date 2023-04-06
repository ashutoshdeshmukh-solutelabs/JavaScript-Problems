function nLargest(arr, n) {
  arr.sort((a, b) => b - a); // sort in reverse
  // Print the nth largest elements
  for (let i = 0; i < n; i++) {
    return arr[n - 1];
  }
}

let arr = [1, 23, 12, 9, 30, 2, 50];
console.log(nLargest(arr, 3));
