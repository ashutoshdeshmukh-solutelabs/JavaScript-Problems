/*
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

function restoreString(s, indices) {
  let result = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join('');
}
let s = 'codeleet';
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices));
