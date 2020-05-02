const Company = require('./company.model')
const Crawler = require('../../crawler')
const validator = require('validator')


exports.addCompany = async (req, res) => {
  let url = req.body.url
  if (!validator.isURL(url) || !url) {
    return res.status(400).json({
      status: false,
      message: 'URL is not defined or wrong!'
    })
  }
  let taskId = await Crawler.crawlCompany(url)
  if (taskId) {
    res.status(200).send({
      status: true,
      message: 'Task is added to Queue'
    })
  }
}

exports.getCompanies = async (req, res) => {
}