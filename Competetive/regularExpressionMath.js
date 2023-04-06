/*
Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/

var isMatch = function (s, p) {
  p = new RegExp(p);
  var newString = s.match(p);
  if (newString !== null) {
    newString = s.match(p)[0];
    if (s === newString) return true;
    return false;
  } else {
    return false;
  }
};

let s = 'aa',
  p = 'a*';
console.log(isMatch(s, p));
