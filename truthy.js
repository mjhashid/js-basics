// Program to count truthy..
const array = [3, "Hashid", null, NaN, 23n, 0];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;

  for (let value of array)
    if (value) {
      count++;
      console.log(value);
    }
  return count;
}
