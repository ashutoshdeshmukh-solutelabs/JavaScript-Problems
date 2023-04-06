let arr = [2, 7, 11, 15];

function twoSum(arr, target) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // 1+2 === 9
        newarr.push(i, j);
      }
    }
  }
  return newarr;
}

console.log(twoSum(arr, 9));
