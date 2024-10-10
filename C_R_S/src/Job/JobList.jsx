import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Make sure this is imported

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();  // Ensure you're calling useNavigate here

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/company/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    console.log(jobId);
    // Corrected navigate function, pass jobId as part of the URL
    localStorage.setItem("job", jobId);
    navigate(`/student/login/homepage/apply/${jobId}`);
  };

  return (
    <div id='job_list_div'>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} className="card mb-3" id='job_list'>
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.description}</p>
              <p className="card-text"><strong>Company:</strong> {job.company}</p>
              <p className="card-text"><strong>Location:</strong> {job.location}</p>
              <p className="card-text"><strong>Type:</strong> {job.type}</p>
              <p className="card-text"><strong>Salary:</strong> ₹{job.salary}</p>
              <p className="card-text"><strong>Date Posted:</strong> {new Date(job.datePosted).toLocaleDateString()}</p>
              <Button variant='success' onClick={() => handleApply(job._id)}>Apply</Button>
            </div>
          </div>
        ))
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default JobList;
