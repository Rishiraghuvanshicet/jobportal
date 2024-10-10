const mongoose = require('mongoose');

const Schema=mongoose.Schema;

  const JobSchema = new Schema({
    title: String,
    description: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference to the company posting the job
    location: String,
    type: { type: String, enum: ['full-time', 'part-time', 'internship'] },
    salary: Number,
    datePosted: { type: Date, default: Date.now },
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }], // Reference to applications for this job
  });
const Job = mongoose.model('Job', JobSchema);
module.exports=Job;