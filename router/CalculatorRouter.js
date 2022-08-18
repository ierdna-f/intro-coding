const controller = require('../controller/CalculatorController');
const { Router } = require('express');
const router = Router();

router.get('/A', controller.questionA)
router.get('/B', controller.questionB)
router.get('/C', controller.questionC)
router.get('/D', controller.questionD)
router.get('/E', controller.questionE)
router.get('/F', controller.questionF)
router.get('/G', controller.questionG)

module.exports = router