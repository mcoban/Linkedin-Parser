const Task = require('./task.model')

exports.getTasks = async (req, res) => {
  Task.find({}).sort('-createdAt').exec((err, records) => {
    res.status(200).json({
      status: 'success',
      tasks: records
    })
  })
}