// str1.length===str2.length && str1.split("").sort().join() == str2.split("").sort().join();

// function areRotations(s1, s2) {
//   // code here
//   let arr1 = s1.split('');
//   let arr2 = s2.split('');

//   arr1.sort();
//   arr2.sort();

//   let str1 = arr1.join('');
//   let str2 = arr2.join('');

//   let result = str1.toUpperCase() === str2.toUpperCase();
//   if (result) return 1;
//   else return 0;
// }

function areRotations(s1, s2) {
  // code here
  //   if (s1.length != s2.length) return 0;

  if (
    s1.length === s2.length &&
    s1.split('').sort().join() == s2.split('').sort().join()
  )
    return 1;
  else return 0;
}

console.log(areRotations('ABCD', 'BCAD'));
