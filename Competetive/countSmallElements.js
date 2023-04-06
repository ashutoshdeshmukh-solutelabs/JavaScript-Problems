// 1 st approach
function countOfElements(arr, n, x) {
  //code here
  let count = 0;
  arr.filter((element, index) => {
    if (element <= x) {
      count++;
    }
  });
  return count;
}

// 2nd approach
function countOfElements1(arr, n, x) {
  //code here
  let newArr = [];
  arr.filter((element, index) => {
    if (element <= x) {
      newArr.push(element);
    }
  });
  return newArr.length;
}

// driver

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(countOfElements(arr, 9, 5));
