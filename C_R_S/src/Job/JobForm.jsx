import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'full-time',
    salary: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to create a new job
      await axios.post('http://localhost:3000/company/Job', jobData);
      alert('Job posted successfully!');
      // Clear form after submission
      setJobData({
        title: '',
        description: '',
        location: '',
        type: 'full-time',
        salary: '',
      });
    } catch (error) {
      console.error('Error posting the job', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}  id='job_form'>
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          value={jobData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
     
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Job Type</label>
        <select
          name="type"
          value={jobData.type}
          onChange={handleChange}
          className="form-control"
        >
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="internship">Internship</option>
        </select>
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          value={jobData.salary}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <center><button type="submit" className="btn btn-primary mt-2">Post Job</button></center>
    </form>
  );
};

export default JobForm;