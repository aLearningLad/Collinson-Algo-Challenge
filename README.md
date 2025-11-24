# The Collinson Group technical assessment

## 🧠 A short question on arrays and loops
User is required to write a function to determine the minimum number of vehicles that a group of people could take on a roadtrip.



 ## ⚙️ Tech Stack
| **Layer**          | **Technology**             |
|---------------------|----------------------------|
| Language(s)    | Typescript (transpiled to Javascript and stored inside the /dist folder)      |
| Testing    | Jest, with @types/jest to accomodate Typescript     |
| JIT compilation to run Typescript without repetitive builds   | ts-node     |

## 🚀 Getting Started
### :one: Clone and install
```
git clone https://github.com/aLearningLad/Collinson-Algo-Challenge.git
cd your-folder
npm install
```

### :two: Run Tests
There are three in total, one for each test case in the problem
```
npm test
```

### :three: Run the function itself
Optionally edit the arguments passed into *src/answer.ts* and then: 
```
npm  start
```

### 💻 The code
```

const leastCars = (p: number[], s: number[]): number => {
  let carCount = 0;
  if (p.length < 2 && s.length < 2) return 1; // one person, single seat

  // sort my cars in descending order ---> I want to use the car with MOST seats first
  s.sort((a: number, b: number) => b - a);

  // how many people do am I planning for in total --> either for-loop or reduce
  let bodyCount: number = p.reduce(
    (currentTotal: number, peopleInCurrentCAR: number) =>
      currentTotal + peopleInCurrentCAR,
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


```


