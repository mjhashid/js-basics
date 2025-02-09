checkSpeed(71);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerHour = 5;

  if (speed < speedLimit + kmPerHour) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerHour);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
