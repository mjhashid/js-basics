let maxNumber = max(3, 5);
console.log(maxNumber);
// First way
function max(a, b) {
  if (a > b) return a;
  return b;
}

// second way
let result = maxValue(5, 2);
console.log(result);
function maxValue(a, b) {
  // using conditional operator..
  return a > b ? a : b;
}
