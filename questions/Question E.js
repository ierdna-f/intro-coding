const calculator = require('../util/CalculatorUtils')

// Verifique e informe quais números aparecem repetidos, a quantidade de vezes que aparece, no item a. 
const answer = (input) => ({ 'Repeated values ' : calculator.getRepeat(input) })

module.exports = {
  answer
}  