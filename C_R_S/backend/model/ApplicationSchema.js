const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  coverLetter: String,
  status: { type: String, enum: ['applied', 'interview', 'offered', 'rejected'], default: 'applied' },
  dateApplied: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', ApplicationSchema);