// 1. Remove duplicates in an array.
let arr = [1, 2, 3, 3, 1, 2, 3, 5, 6];

function removeDuplicates(arr) {
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i] !== arr[i - 1]) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(removeDuplicates(arr));

// 2. Count the number of occurrences elements in an array and display in an object.

function count_occur(a) {
  let c = {};
  for (i of arr) {
    if (c[i]) {
      c[i]++;
    } else {
      c[i] = 1;
    }
  }
  return c;
}
let arr1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(count_occur(arr));
