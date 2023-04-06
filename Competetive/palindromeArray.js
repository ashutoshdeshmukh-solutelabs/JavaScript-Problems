function PalinArray(arr, n) {
  for (let item of arr) {
    if (item !== this.getReverse(item)) return 0;
  }
  return 1;
}
function getReverse(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  return sum;
}

array = [111, 123, 333, 253, 555];
console.log(palindromeArray(array, array.length));
