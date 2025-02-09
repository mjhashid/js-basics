showNumber(9);

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    // First approach...

    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");

    // second approach..

    const number = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, number);
  }
}
