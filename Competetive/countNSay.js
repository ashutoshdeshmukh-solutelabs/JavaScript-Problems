function countAndSay(n) {
  if (n <= 0) return -1;
  let result = '1';
  let i = 1;
  while (i++ < n) {
    let arr = new Array();
    let count = 1;
    for (let j = 0; j < result.length; j++) {
      if (result.charAt(j) == result.charAt(j - 1)) {
        count++;
      } else {
        arr.push(count);
        arr.push(result.charAt(j - 1));
        count = 1;
      }
    }
    arr.push(count);
    arr.push(result.charAt(result.length - 1));
    result = [...arr];
  }
  return result;
}

console.log(countAndSay(4));

/*
var countAndSay = function(n) {
    if(n ==1)
    return '1';
    let i =2;
    let ans = '1';
    while(i<=n){
        let count =1;
        let modified_ans = '' ;
        for(let j=1;j<ans.length;j++){
            if(ans.charAt(j) !== ans.charAt(j-1)){
                modified_ans += count.toString() + ans.charAt(j-1);
                count = 1;
            }
            else{
                count++;
            }
        }
        modified_ans += count.toString() + ans.charAt(ans.length - 1
*/
