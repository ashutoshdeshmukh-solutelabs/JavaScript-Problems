/* Input:
N = 5
names[] = { "Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks" }

Output:
GeeksforGeeks */

function longest(names, n) {
  //code here
  let longName = '';
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longName.length) {
      longName = names[i];
    }
  }
  return longName;
}

let names = ['Geek', 'Geeks', 'Geeksfor', 'GeeksforGeek', 'GeeksforGeeks'];
console.log(longest(names, names.length));
