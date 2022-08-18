const questionA = require('../questions/Question A')
const questionB = require('../questions/Question B')
const questionC = require('../questions/Question C')
const questionD = require('../questions/Question D')
const questionE = require('../questions/Question E')
const questionF = require('../questions/Question F')
const questionG = require('../questions/Question G')

const handle = (question, req) => {
  const input = req.body.input
  switch(question){
    case 'A': return questionA.answer(input)
    case 'B': return questionB.answer(input)
    case 'C': return questionC.answer(input)      
    case 'D': return questionD.answer(input)
    case 'E': return questionE.answer(input)
    case 'F': return questionF.answer(input)
    case 'G': return questionG.answer(input)
  }
}
 
module.exports = {
  handle
}