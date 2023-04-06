let isValid = (input) => {
  let brackets = '{}[]()<>';
  let arr = [];
  if (input.length == 1) {
    return false;
  }
  for (let b of input) {
    if (brackets.indexOf(b) != -1) {
      let index = brackets.indexOf(b);
      if (index % 2 === 0) {
        arr.push(index + 1);
      } else {
        if (arr.pop() !== index) {
          return false;
        }
      }
    }
  }
  if (arr.length == 0) {
    return true;
  }
};

let str1 = '( {}[]({}))';
let str2 = ']';
console.log(isValid(str1));
console.log(isValid(str2));
