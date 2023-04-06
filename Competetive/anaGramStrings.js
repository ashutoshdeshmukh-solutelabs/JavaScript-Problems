/*
Anagram Strings

Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.
*/

function isAnagram(a, b) {
  // code here
  if (a.length != b.length) return false;

  //   string to array of chars
  let str1 = a.split('');
  let str2 = b.split('');

  str1.sort();
  str2.sort();

  for (let i = 0; i < a.length; i++) {
    if (str1[i] != str2[i]) return false;
  }
  return true;
}

console.log(isAnagram('tacs', 'actr'));
