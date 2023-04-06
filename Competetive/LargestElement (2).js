let arr = [2, 4, 5, 6, 7, 8, 12, 43, 65, 1, 34];

arr.sort((a, b) => a - b);

let n = 4;
for (let i = 1; i <= n; i++) {
  console.log(arr[arr.length - i]);
}
