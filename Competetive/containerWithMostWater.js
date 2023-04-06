var maxArea = function (height) {
  let value = 0;
  for (let i = 0; i <= height.length; i++) {
    let vari = 1;
    for (let j = i + 1; j <= height.length - 1; j++) {
      let val = Math.min(height[i], height[j]);
      let newval = val * vari;
      value = Math.max(value, newval);
      vari++;
    }
  }
  return value;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
