function checkPalindrome(string) {
  let arr = S.split('');
  let rev = arr.reverse();
  let revString = rev.join('');
  if (S == revString) return 1;
  else return 0;
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);
