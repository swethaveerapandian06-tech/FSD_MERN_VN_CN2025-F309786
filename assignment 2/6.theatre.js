let totalSeats = 120;
let bookedSeats = 78;

let left = totalSeats - bookedSeats;
console.log("Seats Left:", left);

if (left < 20)
  console.log("Almost full");
else if (left <= 60)
  console.log("Medium availability");
else
  console.log("Many seats free");
