const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  taskId: String,
  name: {
    type: String,
    required: true,
    trim: true,
    limit: 100
  },
  description: String,
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)

