const calculator = require('../util/CalculatorUtils')

// Determine o maior e o menor valor do conjunto de números lidos
const answer = (input) => {
  const [minValue, maxValue] = calculator.minMax(input)
  return { 'Menor número:' : minValue, 'Maior número': maxValue }
}

module.exports = {
  answer
}  