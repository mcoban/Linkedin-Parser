const Task = require('./task.model')

exports.getTasks = async (req, res) => {
  res.status(200).json({
    status: 'success',
    tasks: []
  })
}