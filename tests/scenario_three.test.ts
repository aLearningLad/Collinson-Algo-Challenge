const { leastCars: testerFxn3 } = require("../src/answer");
test("Finds least number of cars to get folks to a location", () => {
  expect(testerFxn3([2, 3, 4, 2], [2, 5, 7, 2])).toBe(2);
});
