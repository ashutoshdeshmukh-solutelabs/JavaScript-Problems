/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function groupAnagrams(strs) {
  let map = {};
  for (str of strs) {
    let s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }
  return Object.values(map);
}

strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
