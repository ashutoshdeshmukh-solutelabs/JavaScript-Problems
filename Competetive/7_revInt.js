// Reverse Integer

function reverseInt(x) {
  let result = 0;
  result = Math.sign(x) * parseInt(String(x).split('').reverse().join(''));
  return result;
}

console.log(reverseInt(-123));

// const n = Math.sign(x)*parseInt(String(x).split('').reverse().join(''));
// return (n > - Math.pow(2, 31) && n < Math.pow(2, 31) - 1) ? n : 0;
