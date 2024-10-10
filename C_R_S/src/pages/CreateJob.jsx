import React, { useState } from 'react';
import axios from 'axios';
import CompanySelection from './CompanySelection';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', {
        title,
        description,
        location,
        type,
        salary,
        company: companyId, // The company ID from the dropdown
      });
      alert('Job created successfully!');
      // Reset form fields
      setTitle('');
      setDescription('');
      setLocation('');
      setType('');
      setSalary('');
      setCompanyId('');
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Select Job Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
        </select>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          required
        />
        <CompanySelection onSelectCompany={setCompanyId} />
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default CreateJob;