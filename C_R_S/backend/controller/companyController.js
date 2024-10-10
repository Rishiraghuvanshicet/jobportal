const JobSchema = require("../model/JobSchema");
const Company=require("../model/company")

///get request for Jobs
const Cdata= async (req, res) => {
    const City = req.params.id
    try {
      const company = await Company.findOne({ City });
  
      if (!company) return res.status(404).json({ message: "Company not found" });
  
      res.json(company);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

//company Job Recruitement Criteria
const Job = async (req, res) => {
  const { title, description, company, location, type, salary } = req.body;

  const newJob = new JobSchema({
    title,
    description,
    company,
    location,
    type,
    salary,
  });
  try {
    const existingJob = await JobSchema.findOne({ title });
    if (existingJob) {
      return res.status(404).json({ message: "Job already posted" });
    }
    await newJob.save();
    res.status(201).json({ message: "Job Posted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const JobDetails = async(req,res)=>{
 
  try {
    const Job = await JobSchema.find( ).populate('company');

    if (!Job) return res.status(404).json({ message: "Job not found" });

    res.json(Job);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
const jobApply= async (req, res) => {
  const jobId = req.params.id
  try {
    const job = await JobSchema.findOne({ jobId });

    if (!job) return res.status(404).json({ message: "Job not found" });

    res.json(job);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
    Cdata,
  Job,
  JobDetails,
  jobApply,
};
