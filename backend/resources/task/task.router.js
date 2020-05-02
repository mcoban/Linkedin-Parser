const express = require('express')
const taskController = require('./task.controller')

const router = express.Router()

router
  .route('/')
  .get(taskController.getTasks)

module.exports = router