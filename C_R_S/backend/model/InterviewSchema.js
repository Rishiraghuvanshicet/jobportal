const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  application: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
  date: Date,
  time: String,
  location: String,
  interviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: String,
});

module.exports = mongoose.model('Interview', InterviewSchema);