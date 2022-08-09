// EX 1
const newObject = {
  min: 10,
  max: 15
}

function isWithinRange(number) {
  if (newObject.min <= number && newObject.max >= number) {
    return true

  }
  { return false }
}

console.log(isWithinRange(13));

// Ex 2

const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]

function calcMaxScrabbleScore() {
  let counter = 0;

  for (let i = 0; i < scrabbleHand.length; i++) {
    counter += scrabbleHand[i].score
  } return counter
}

console.log(calcMaxScrabbleScore());

// EX 3

function isEmptyObject(object) {
  if (Object.keys(object).length === 0) {
    return true
  } return false
}
console.log(isEmptyObject({}));

// Ex 4

const emptyObj = {}

function numberOfOccurrences(string) {
  for (let i = 0; i < string.length; i++) {
    counter = 1
    for (let j = 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        counter++
      }
    } emptyObj[string[i]] = counter
  } return emptyObj
}

console.log(numberOfOccurrences("taataat"));

// Ex 5

function freeShipping(order) {
  let sumUp = 0;
  const arrayOfValues = []
  arrayOfValues.push(Object.values(order))
  for (let i = 0; i < arrayOfValues.length; i++) {
    sumUp += arrayOfValues[i]

  }
  if (sumUp > 50) {
    return true
  } return false

}

console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));

// EX 6

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
};

programming.languages.push("GO")
programming.difficulty = 7
delete programming.jokes
programming.isFun = true

for (let i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}


console.log(Object.keys(programming));
console.log(Object.values(programming));
