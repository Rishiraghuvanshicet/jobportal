import React, { useState } from 'react';
import axios from 'axios';



const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    UserId: '',
    jobId: '',
    coverLetter: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3000/api/applicationSubmit', formData);
      setMessage('Application submitted successfully!');
      
      setFormData({
        UserId: '',
        jobId: '',
        coverLetter: '',
      });
    } catch (error) {
      setMessage(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <div >
    <center >
      <form onSubmit={handleSubmit} id='job_form' className='mt-4'>
      <h2>Apply for a Job</h2>
        <div>
          <label className='mt-2'>User ID:</label>
          <input className='mt-2'
            type="text"
            name="UserId"
            value={formData.UserId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='mt-2'>Job ID:</label>
          <input
             className='mt-2'
            type="text"
            name="jobId"
            value={formData.jobId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='mt-2'>Cover Letter:</label>
          <textarea
            className='mt-2'
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className=' mt-4 btn btn-success'>Submit Application</button>
      </form>
      {message && <p>{message}</p>}
      </center>

    </div>
  );
};

export default ApplicationForm;
