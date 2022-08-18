const calculator = require('../util/CalculatorUtils')

// Informe o percentual de ocorrência de números ímpares no item a
const answer = (input) => ({ 'Total of odd numbers : ' : calculator.percentageOddNumbers(input) })

module.exports = {
  answer
}  