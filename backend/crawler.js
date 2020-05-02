const axios = require('axios')
const cheerio = require('cheerio')
const kue = require('kue')

const queue = kue.createQueue()

queue.process('crawlCompany', (job, done) => {
  const linkedinUrl = job.data.url
  axios(linkedinUrl, {
    headers: {
      'user-agent': 'Google Chrome'
    }
  })
    .then(res => res.data)
    .then(body => {
      const $ = cheerio.load(body)
    })
})

module.exports = {
  company: {
    addCrawlJob: url => {
      queue.createJob('crawlCompany', {
        url
      }).removeOnComplete(true).save(err => {
        if (!err) return job.id
        return false
      })
    }
  }
}


module.exports.company.addCrawlJob(`https://www.linkedin.com/company/facebook/`)