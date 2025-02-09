let movie = {
  title: "Afan",
  year: 2024,
  rating: 6.0,
  director: "Hashid",
};
showProperty(movie);

function showProperty(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
