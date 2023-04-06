/*
Leaders in an array

Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 

Input:
n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17 
as it is greater than all the elements
to its right.  Similarly, the next 
leader is 5. The right most element 
is always a leader so it is also 
included.
*/

function leaders(arr, n) {
  // code here
  let leaders = [];
  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) break;
    }
    if (j == n)
      // the loop didn't break
      leaders.push(arr[i]);
  }
  return leaders;
}

let arr = [16, 17, 4, 3, 5, 2];
console.log(leaders(arr, arr.length));
