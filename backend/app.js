const express = require('express')
const cors = require('cors')

const personRouter = require('./resources/person/person.router')
const companyRouter = require('./resources/company/company.router')
const jobRouter = require('./resources/job/job.router')
const locationRouter = require('./resources/location/location.router')
const taskRouter = require('./resources/task/task.router')
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.use('/api/v1/people', personRouter)
app.use('/api/v1/companies', companyRouter)
app.use('/api/v1/jobs', jobRouter)
app.use('/api/v1/locations', locationRouter)
app.use('/api/v1/tasks', taskRouter)

module.exports = app