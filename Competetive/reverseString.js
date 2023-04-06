/*
Reverse a String
You are given a string s. You need to reverse the string.
*/

function reverseWord(str) {
  // code here
  //convert string to array
  let tmpArr = str.split('');
  tmpArr.reverse();

  let s = '';

  //   convert array to string
  for (let i = 0; i < tmpArr.length; i++) {
    s += tmpArr[i];
  }

  return s;
}

console.log(reverseWord('ashutosh'));
