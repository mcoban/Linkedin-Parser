const express = require('express')
const taskController = require('./task.controller')

const router = express.Router()

router
  .route('/')
  .get(taskController.getCompanies)

module.exports = router