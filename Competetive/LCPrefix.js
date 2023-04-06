/*
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

// A Function to find the common prefix between strings - str1 and str2
function commonPrefixUtil(str1, str2) {
  let result = '';
  let n1 = str1.length,
    n2 = str2.length;

  // Compare str1 and str2
  for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
    if (str1[i] != str2[j]) {
      break;
    }
    result += str1[i];
  }
  return result;
}

// A Function that returns the longest
// common prefix from the array of strings
function commonPrefix(arr, n) {
  let prefix = arr[0];

  for (let i = 1; i <= n - 1; i++) {
    prefix = commonPrefixUtil(prefix, arr[i]);
  }
  return prefix;
}

// Driver code
let arr = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
let n = arr.length;
console.log(commonPrefix(arr, n));
