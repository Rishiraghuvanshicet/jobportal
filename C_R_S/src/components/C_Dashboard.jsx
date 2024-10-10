import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [jobApplicationCounts, setJobApplicationCounts] = useState([]);

  useEffect(() => {
    const fetchJobApplicationCounts = async () => {
      try {
        const response = await axios.get('/api/jobs/applications/count');
        setJobApplicationCounts(response.data);
      } catch (error) {
        console.error('Error fetching job application counts', error);
      }
    };

    fetchJobApplicationCounts();
  }, []);

  return (
    <div className="dashboard">
      <h2>Job Application Dashboard</h2>
      {jobApplicationCounts.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Number of Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobApplicationCounts.map((job) => (
              <tr key={job.jobId}>
                <td>{job.jobTitle}</td>
                <td>{job.applicationCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No job applications found.</p>
      )}
    </div>
  );
};

export default Dashboard;
