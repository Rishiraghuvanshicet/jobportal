import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { Button } from "react-bootstrap";
import Offcanvas_Company from '../components/Offcanvas_Company';
import JobForm from '../Job/JobForm';

export default function Company_home_page() {
  const [jobs, setJobs] = useState([]);

  // Fetch all jobs
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get('http://localhost:5000/:id/Jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
    fetchJobs();
  }, []);
  
  return (
    <div>
    <Offcanvas_Company/>
    <div id="job_form_div">
    <JobForm/>
    </div>
    
    </div>
  );
}
