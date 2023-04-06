// function pushZerosToEnd(arr, n) {
//   //code here
//   let count = 0; //count of non zero elements
//   for (let i = 0; i < n; i++) {
//     if (arr[i] != 0) {
//       arr[count++] = arr[i]; // incrementing count and
//     }
//   }
//   while (count < n) arr[count++] = 0;
//   return arr;
// }

function pushZerosToEnd(arr, n) {
  let nonZeroArr = [];
  let zeroArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) nonZeroArr.push(arr[i]);
    else zeroArr.push(arr[i]);
  }
  //   let final = nonZeroArr.concat(zeroArr);
  let final = [...nonZeroArr, ...zeroArr]; // merge
  return final;
}

let arr = [3, 5, 0, 0, 4, 0];
console.log(pushZerosToEnd(arr, arr.length));
