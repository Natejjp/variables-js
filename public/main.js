function main() {
  const numberOfCups = 1
  const fullName = 'Nathan Pham'
  console.log(`${fullName} has ${numberOfCups} cup of coffee a day`)

  const aboutMe = {
    fullName: 'Nathan Pham',
    favoriteNumber: 17,
    favoriteMovies: ['Legally Blonde', 'Iron Man', 'Intersellar'],
  }

  let username = window.prompt('What is your name? ')
  console.log(`Hello ${username}`)

  let answerOne = window.prompt('How old are you? ')
  let answerTwo = window.prompt('How many pets do you have? ')
  const firstOperand = parseFloat(answerOne)
  const secondOperand = parseFloat(answerTwo)

  let sum = firstOperand + secondOperand
  let difference = firstOperand - secondOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand
  console.log(`${sum} is the sum of ${firstOperand} and ${secondOperand}`)
  console.log(
    `${difference} is the difference of ${firstOperand} and ${secondOperand}`
  )
  console.log(
    `${product} is the product of ${firstOperand} and ${secondOperand}`
  )
  console.log(
    `${quotient} is the quotient of ${firstOperand} and ${secondOperand}`
  )
  console.log(
    `${remainder} is the remainder of ${firstOperand} and ${secondOperand}`
  )

  let numbers = [
    27104,
    30231,
    15365,
    12258,
    11523,
    49138,
    15717,
    24099,
    20430,
    19166,
    37491,
    29089,
    23950,
    15799,
    32717,
    28381,
    20152,
    24783,
    21351,
    13895,
    16018,
    26557,
    42412,
    24154,
    19862,
    47077,
    18328,
    30778,
    20933,
    29231,
    43371,
    18699,
    25835,
    41358,
    28067,
    25381,
    27440,
    32383,
    44262,
    31069,
    49136,
    28734,
    39314,
    10501,
    28581,
    26598,
    25818,
    39262,
    39165,
    27994,
    25350,
    24340,
    41150,
    36317,
    33036,
    20410,
    43165,
    35747,
    11548,
    48473,
    17145,
    45247,
    33154,
    37844,
    17191,
    13291,
    47921,
    29942,
    31721,
    28547,
    29814,
    44011,
    40975,
    42134,
    49329,
    24140,
    28447,
    43848,
    10882,
    34617,
    41951,
    36818,
    42754,
    10744,
    44667,
    49334,
    27941,
    26805,
    25705,
    23229,
    22374,
    33482,
    24101,
    28094,
    47826,
    18269,
    25992,
    28839,
    31161,
    37291,
  ]

  let smallest = numbers[0]
  let largest = numbers[0]
  let sumOfArray = 0
  let average = 0

  //const number = numbers[index]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    sumOfArray = sumOfArray + numbers[i]
  }

  average = sumOfArray / numbers.length

  const stats = {
    smallest: smallest,
    largest: largest,
    sumOfArray: sumOfArray,
    average: average,
  }

  console.log(stats)
}

document.addEventListener('DOMContentLoaded', main)
