/* 
Destination City

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
*/

function destCity(paths) {
  let arr1 = paths.reduce((arr, item) => {
    arr.push(item[0]);
    return arr;
  }, []);
  let arr2 = paths.reduce((arr, item) => {
    arr.push(item[1]);
    return arr;
  }, []);

  let ans = arr2.filter((el) => !arr1.includes(el));
  return ans[0];
}

let paths = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];
console.log(destCity(paths));
