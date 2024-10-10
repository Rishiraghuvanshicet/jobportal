const express = require('express');
const router = express.Router();
const Application = require('../model/ApplicationSchema');
const User = require('../model/user');
const Job = require('../model/JobSchema');

// Route to submit a job application
router.post('/applicationSubmit', async (req, res) => {
  try {
    const { UserId, jobId, coverLetter } = req.body;

    // Find the student and the job
    const student = await User.find(UserId);
    const job = await Job.findById(jobId);

    if (!student || !job) {
      console.log(student == true)
      console.log(job == true)
      return res.status(404).json({ message: 'Student or Job not found' });
    }

    // Create the application
    const application = new Application({
      student: UserId,
      job: jobId,
      coverLetter,
    });

    // Save the application
    const savedApplication = await application.save();
    console.log(savedApplication);
    // Add the application to the student and job records
    student.applications.push(savedApplication._id);
    job.applications.push(savedApplication._id);

    // Save updated student and job data
    await student.save();
    await job.save();

    res.status(201).json({ message: 'Application submitted successfully', application: savedApplication });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch application by ID
router.get('/:id/application', async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id)
      .populate('student', 'name email') // Populates student details
      .populate('job', 'title description'); // Populates job details

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
