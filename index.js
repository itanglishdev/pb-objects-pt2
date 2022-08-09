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