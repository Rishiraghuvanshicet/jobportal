const express = require("express");
const router = express.Router();
const authController = require('../controller/authController');
const companyController = require('../controller/companyController');
const server =require('../server');
const Company = require("../model/company");

// Register route
router.post("/Cregister", authController.Cregister )
// Login route
router.post("/Clogin", authController.Clogin)
//get info
router.get("/:id/companydetails",companyController.Cdata)
//post JobSchema
router.post("/Job",companyController.Job)
//get Jobs 
router.get("/jobs",companyController.JobDetails)
//aplly Job
router.get('/:id/jobApply',companyController.jobApply)

module.exports = router;