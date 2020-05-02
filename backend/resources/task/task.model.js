const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    limit: 100
  },
  description: String,
}, { timestamps: true })

taskSchema.index({ name: 1 })
module.exports = mongoose.model('Task', taskSchema)

