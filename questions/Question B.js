const calculator = require('../util/CalculatorUtils')

// Determine a média aritmética dos números
const answer = (input) => ({ 'Média Aritmética : ' : calculator.mediaArr(input) })

module.exports ={
  answer
}  