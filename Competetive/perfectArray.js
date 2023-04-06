/*
An array is said to be perfect if its reverse array matches the original array
Input : Arr[] = {1, 2, 3, 2, 1}
Output : PERFECT
Explanation:
Here we can see we have [1, 2, 3, 2, 1] 
if we reverse it we can find [1, 2, 3, 2, 1]
which is the same as before.
So, the answer is PERFECT.
*/

function IsPerfect(arr, n) {
  //code here
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

let arr = [1, 2, 3, 2, 1];
console.log(IsPerfect(arr, arr.length));
