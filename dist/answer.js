"use strict";
const leastCars = (p, s) => {
  let carCount = 0;

  if (p.length < 2 && s.length < 2) return 1; // one person, single seat

  // sort my cars in descending order ---> I want to use the car with MOST seats first
  s.sort((a, b) => b - a);

  // how many people do am I planning for in total --> either for-loop or reduce
  let bodyCount = p.reduce(
    (currentTotal, peopleInCurrentCAR) => currentTotal + peopleInCurrentCAR,
    0
  );

  // check all my sorted seats, from biggest car first, add folks as I go
  for (let i = 0; i < s.length && bodyCount > 0; i++) {
    // I want to exit loop as soon as everyone has a seat, hence bodycount check
    bodyCount -= Math.min(s[i], bodyCount);
    carCount++;
  }

  return carCount;
};
console.log(leastCars([2, 3, 4, 2], [2, 5, 7, 2]));
module.exports = { leastCars };
