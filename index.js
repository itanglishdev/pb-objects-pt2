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