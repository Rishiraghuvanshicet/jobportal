import React, { useState, useEffect } from 'react';
import JobList from '../Job/JobList';
import Offcanvas_Student from '../components/Offcanvas_Student';

export default function Student_home_page() {
  return (
    <div>
    <Offcanvas_Student/>
    <center><h1 style={{fontFamily:'times new roman',border:"2px solid black",width:'50%',backdropFilter:"blur(15px)", boxShadow: "5px 3px rgb(100, 89, 255)"}}>JOBS</h1></center>
    <JobList/>
    </div>
  );
};

