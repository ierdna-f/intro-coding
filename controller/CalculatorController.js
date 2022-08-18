const service = require('../service/CalculatorService')

const questionA = (req, res) => res.status(200).json(service.handle('A', req))
const questionB = (req, res) => res.status(200).json(service.handle('B', req))
const questionC = (req, res) => res.status(200).json(service.handle('C', req))
const questionD = (req, res) => res.status(200).json(service.handle('D', req))
const questionE = (req, res) => res.status(200).json(service.handle('E', req))
const questionF = (req, res) => res.status(200).json(service.handle('F', req))
const questionG = (req, res) => res.status(200).json(service.handle('G', req))

module.exports = {
  questionA,
  questionB,
  questionC,
  questionD,
  questionE,
  questionF,
  questionG
}