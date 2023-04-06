function sum(arr, n) {
  // code here
  let sum = 0;
  arr.filter((element, index) => {
    sum = sum + element;
  });
  return sum;
}

let arr = [3, 2, 4, 4, 3];
console.log(sum(arr, arr.length));
