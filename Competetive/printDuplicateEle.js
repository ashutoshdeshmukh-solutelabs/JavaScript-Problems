var arr = ['Red', 'Blue', 'Red', 'Black', 'Green', 'Blue', 'Blue'];

function printDuplicate(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        if (tempArr.includes(arr[i])) {
          break;
        } else {
          tempArr.push(arr[i]);
        }
      }
    }
  }
  return tempArr;
}

console.log(printDuplicate(arr));
