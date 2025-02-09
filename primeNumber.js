function isPrimeNumber(limits) {
  for (let number = 2; number <= limits; number++)
    if (checkFactors(number)) console.log(number);
}

function checkFactors(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
