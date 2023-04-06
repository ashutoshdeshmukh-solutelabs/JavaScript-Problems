function rotate(arr, n) {
  //code here
  let a = arr.pop(arr.length - 1);
  arr.unshift(a);
  return arr;
}

let arr = [9, 8, 7, 6, 4, 2, 1, 3];
console.log(rotate(arr, arr.length));
