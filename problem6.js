// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSq(num){
  let sum = [];
  let square = [];
  for (var i=1; i<=num; i++){
    sum.push(i**2);
    square.push(i)
  }
  sumSum = sum.reduce((a, b) => {
    return a+b
  })

  squareSum = square.reduce((a, b) => {
    return a+b
  })**2
  return squareSum - sumSum
}

sumSq(100)