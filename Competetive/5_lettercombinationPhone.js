function letterCombinations(digits) {
  const letters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  return digits.split('').reduce((prev, d) => {
    if (prev.length === 0) {
      return letters[d];
    }

    const res = [];

    for (let l0 of prev) {
      for (let l1 of letters[d]) {
        res.push(`${l0}${l1}`);
      }
    }

    return res;
  }, []);
}

console.log(letterCombinations('23'));
