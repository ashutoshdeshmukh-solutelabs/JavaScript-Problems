// let arr = [2, 1, 2, 3, 4, 4, 1, 1, 7];

// function removeDuplicateEle(arr) {
//   finalArr = arr.filter((item, index) => arr.indexOf(item) == index);
//   return finalArr;
// }

// console.log(removeDuplicateEle(arr));

// The filter() method creates a new array of elements that pass the condition we provide. It will include only those elements for which true is returned. We can remove duplicate values from the array by simply adjusting our condition.

var arr = ['Red', 'Blue', 'Blue', 'Green', 'Blue'];

function removeDuplicates(arr) {
  var uniqueEle = [];
  arr.forEach((element) => {
    if (!uniqueEle.includes(element)) {
      uniqueEle.push(element);
    }
  });
  return uniqueEle;
}
console.log(removeDuplicates(arr));
