const user = require('../model/user');
const Application = require('../model/ApplicationSchema');

const Student = async (req, res) => {
    try {
      const student = await user.findById(req.params.id).populate({
        path: 'applications',
        populate: { path: 'job' } // Populate job details in the applications
      });
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.json(student.applications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports={
    Student,
  }