const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  followers: Number,
  imageThumbnail: String,
  overview: String,
  website: String,
  industry: String,
  companySize: String,
  type: String,
  headquarters: String,
  founded: Number,
  locations: Number,
  status: String,
}, { timestamps: true })

companySchema.index({ name: 1 })
module.exports = mongoose.model('Company', companySchema)

