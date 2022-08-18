const calculator = require('../util/CalculatorUtils')  

// Informe qual percentual de números abaixo e acima da média calculada no item b
  const answer  = (array) => {
  
  const media = calculator.mediaArr(array)
  const totalNumbersBelowAvg = (arr) => arr.filter( e => e < media).length
  const totalBelow = totalNumbersBelowAvg(array) 
  const totalAbove = array.length - totalBelow

  const belowPercentage = calculator.getPercentage(totalBelow / array.length) 
  const abovePercentage = calculator.getPercentage(totalAbove / array.length)
  
  
  return [
    { 'Média : ' : media },
    { 'Porcentagem abaixo da média: ' : belowPercentage },
    { 'Porcentagem acima da média: ' : abovePercentage }
  ]
  
}

module.exports ={
  answer
}  