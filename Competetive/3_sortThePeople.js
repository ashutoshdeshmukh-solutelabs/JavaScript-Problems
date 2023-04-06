function sortPeople(names, heights) {
  // array of indices
  let indices = names.map((name, index) => index); //return index of each name

  // sort indices based on heights
  const sortedIndices = indices.sort((a, b) => heights[b] - heights[a]);

  // get sorted names array based on sorted indices
  return sortedIndices.map((index) => names[index]);
}

let names = ['Mary', 'John', 'Emma'],
  heights = [180, 165, 170];

console.log(sortPeople(names, heights));
