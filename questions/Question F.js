const calculator = require('../util/CalculatorUtils')

// Faça a soma de todos os números pares lidos no item a
const answer = (input) => ({ 'Soma total :' : calculator.sumEvens(input) })

module.exports = {
  answer
}  