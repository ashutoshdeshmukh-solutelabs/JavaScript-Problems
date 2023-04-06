/*
Number of Distinct Averages

You are given a 0-indexed integer array nums of even length.

As long as nums is not empty, you must repetitively:

Find the minimum number in nums and remove it.
Find the maximum number in nums and remove it.
Calculate the average of the two removed numbers.
The average of two numbers a and b is (a + b) / 2.

For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
Return the number of distinct averages calculated using the above process.

Note that when there is a tie for a minimum or maximum number, any can be removed.
*/

const distinctAverages = function (nums) {
  let n = nums.length;
  const sums = new Set();

  nums.sort();

  for (let i = 0; i < n / 2; ++i) {
    sums.add(nums[i] + nums[n - i - 1]);
  }
  console.log(sums);
  return sums.size;
};

let arr = [4, 1, 4, 0, 3, 5];
console.log(distinctAverages(arr));
