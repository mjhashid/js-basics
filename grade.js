let scores = [24, 59, 44, 50, 66];

console.log(calculateGrade(scores));

function calculateGrade(marks) {
  // calculating the average...

  let sum = 0;
  for (let mark of marks) sum += mark;
  let average = sum / marks.length;

  // Checking the grades...
  if (average < 40) return "F";
  if (average < 45) return "E";
  if (average < 50) return "D";
  if (average < 60) return "C";
  if (average < 70) return "B";
  return "A";
}
