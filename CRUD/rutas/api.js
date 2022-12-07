const express = require('express')
const router = express.Router()
router.use('/student/',require('./students.routes'))
module.exports = router