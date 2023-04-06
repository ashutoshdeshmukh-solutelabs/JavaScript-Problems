var isHappy = function (n) {
  let set = new Set().add(n);
  while (n !== 1) {
    n = String(n)
      .split('')
      .reduce((sum, num) => {
        return sum + Math.pow(num, 2);
      }, 0);
    if (set.has(n)) return false;
    set.add(n);
  }
  return true;
};

console.log(isHappy(19));

/*
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 02 = 1
*/
