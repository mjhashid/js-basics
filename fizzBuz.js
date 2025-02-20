const output = fizzBuzz(29);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "not a number";

  if (input % 3 === 0 && input % 5 === 0) return "Fizz Buzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
