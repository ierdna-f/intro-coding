const express = require('express')
const app = express().use(express.json())
const PORT = 3000

app.use('/calculator' , require('./router/CalculatorRouter'))
app.listen(PORT, () => console.log(`online and listening for localhost:${PORT}`))