/*Keyboard Row*/

// function findWords(words) {
//   const cache = {
//     q: 0,
//     w: 0,
//     e: 0,
//     r: 0,
//     t: 0,
//     y: 0,
//     u: 0,
//     i: 0,
//     o: 0,
//     p: 0,
//     a: 1,
//     s: 1,
//     d: 1,
//     f: 1,
//     g: 1,
//     h: 1,
//     j: 1,
//     k: 1,
//     l: 1,
//     z: 2,
//     x: 2,
//     c: 2,
//     v: 2,
//     b: 2,
//     n: 2,
//     m: 2,
//   };
//   const answ = [];
//   words.forEach((word) => {
//     if (word.length === 1) {
//       answ.push(word);
//     } else {
//       const currRow = cache[word[0].toLowerCase()];
//       for (let i = 1; i < word.length; i++) {
//         if (cache[word[i].toLowerCase()] !== currRow) break;

//         if (i === word.length - 1) answ.push(word);
//       }
//     }
//   });
//   return answ;
// }

const keyboardRows = [
  new Set('qwertyuiop' + 'qwertyuiop'.toUpperCase()),
  new Set('asdfghjkl' + 'asdfghjkl'.toUpperCase()),
  new Set('zxcvbnm' + 'zxcvbnm'.toUpperCase()),
];

function findWords(words) {
  return words.filter((word) =>
    keyboardRows.some((set) => [...word].every((char) => set.has(char)))
  );
}

let words = ['Hello', 'Alaska', 'Dad', 'Peace'];
console.log(findWords(words));

/*
function findWords(words) {
    const possibleWords = [],
          keyboard = { 1: 'qwertyuiop', 2: 'asdfghjkl', 3: 'zxcvbnm' };
    let i = 0, rowIdx = 1;
    
    while(i < words.length) {
        if(words[i].toLowerCase().split('').every((char) => keyboard[rowIdx].includes(char))) {
          possibleWords.push(words[i]);
            i++;
            rowIdx = 1;
        } else {
            if(rowIdx === 3) {
                i++;
                rowIdx = 1;
            }
            else {
                rowIdx++;    
            }
        }
    }
    
    return possibleWords;
*/
