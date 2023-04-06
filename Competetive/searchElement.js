function search(arr, N, X) {
  // write your code here
  for (let i = 0; i < N; i++) {
    if (arr[i] == X) return i;
  }
  return -1;
}

let arr = [1, 2, 3, 4];
console.log(search(arr, arr.length, 3));
