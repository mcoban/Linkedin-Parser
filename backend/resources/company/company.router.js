const express = require('express')
const companyController = require('./company.controller')

const router = express.Router()

router
  .route('/')
  .get(companyController.getCompanies)
  .post(companyController.addCompany)

module.exports = router