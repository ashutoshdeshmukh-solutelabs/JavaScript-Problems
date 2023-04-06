let friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Geeta', 'Harry Potter'],
    age: 20,
  },
  {
    name: 'Bob',
    books: ['War and Peace', 'Geeta', 'Quran'],
    age: 22,
  },
  {
    name: 'Alice',
    books: ['The Monk', 'Pride and Prejudice', 'Good Morning'],
    age: 21,
  },
];

function groupBy(objectArray, property) {
  let arr = [];
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    arr.push(accumulator[key]);
    return arr;
  }, {});
}

let Books = groupBy(friends, 'books');
console.log(Books);
