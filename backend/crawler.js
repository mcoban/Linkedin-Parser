const axios = require('axios')
const cheerio = require('cheerio')
const kue = require('kue')
const Task = require('./resources/task/task.model')

const queue = kue.createQueue()

// queue.process('crawlCompany', (job, done) => {
//   const linkedinUrl = job.data.url
//   axios(linkedinUrl, {
//     headers: {
//       'user-agent': 'Google Chrome'
//     }
//   })
//     .then(res => res.data)
//     .then(body => {
//       const $ = cheerio.load(body)
//     })
// })

exports.crawlCompany = url => {
  return new Promise((resolve, reject) => {
    let job = queue.create('crawlCompany', {
      url
    }).removeOnComplete(true).save(err => {
      if (!err) {
        new Task({
          taskId: job.id,
          name: 'Company Crawl',
          description: `A new crawl job is added to Queue for crawling company via Linkedin URL: ${url}`
        })
        resolve(job.id)
      } else {
        reject(false)
      }
    })
  })
}