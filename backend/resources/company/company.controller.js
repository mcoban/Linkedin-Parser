const Company = require('./company.model')
const Crawler = require('../../crawler')
const validator = require('validator')


exports.addCompany = (req, res) => {
  let url = req.body.url

}

exports.getCompanies = async (req, res) => {
  let taskId = await Crawler.crawlCompany(`https://www.linkedin.com/company/facebook/`)
  if (taskId) {
    res.status(200).send({
      status: true,
      message: 'Task is added to Queue'
    })
  }
}