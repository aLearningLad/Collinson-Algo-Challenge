const { leastCars: testerFxn2 } = require("../src/answer");
test("Finds least number of cars to get folks to a location", () => {
  expect(testerFxn2([4, 4, 2, 4], [5, 5, 2, 5])).toBe(3);
});
