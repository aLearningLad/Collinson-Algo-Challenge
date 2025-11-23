const { leastCars: testerFxn1 } = require("../src/answer");
test("Finds least number of cars to get folks to a location", () => {
  expect(testerFxn1([1, 4, 1], [1, 5, 1])).toBe(2);
});
