function swapKth(arr, n, k) {
  //code here
  let temp = arr[k - 1];
  arr[k - 1] = arr[n - k];
  arr[n - k] = temp;
  return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(swapKth(arr, arr.length, 3));

/* N = 8, K = 3
Arr[] = {1, 2, 3, 4, 5, 6, 7, 8}
Output: 1 2 6 4 5 3 7 8
Explanation: Kth element from beginning is
3 and from end is 6. */
