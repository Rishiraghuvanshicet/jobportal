const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Company = require('../model/company');
const User = require('../model/user');




const SECRET_KEY = "your_secret_key";


//user Get Request
const Udata= async (req, res) => {
  const id = req.params.id;
  try {
    const student = await User.findById(id); 
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).send(error);
  }
}
//-----registration for user----
const Uregister = async (req, res) => {
  const { fullName,DOB,email,Branch,XPercentage,XIIPercentage,Experience,phone,city,password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const newUser = new User({
    fullName,
    DOB,
    email,
    Branch,
    XPercentage,
    XIIPercentage,
    Experience,
    phone,
    city,
    password:hashedPassword,
  });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -----------Login of Student----------------
const Ulogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user){
      alert("invalid credientials")
      return res.status(404).json({message:"Invalid UserName"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//-----------company registration---------------------

const Cregister= async (req, res) => {
    const { CompanyName, HrName, ContactNumber, City, UserName, password } = req.body;
    
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

    try {
          const newCompany = new Company({
            CompanyName,
            HrName,
            ContactNumber,
            City,
            UserName,
            password:hashedPassword,
        });

        await newCompany.save();
        res.status(201).json({ message: "Company registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "catch block"});
    }
};

//----------------------company login--------------------------

const Clogin= async (req, res) => {
    const { UserName, password } = req.body;
  
    try {
      const company = await Company.findOne({ UserName });
      if (!company){
        return res.status(404).json({message:"Invalid UserName"})
      }

      const isMatch = await bcrypt.compare(password, company.password);

      
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

  
      const token = jwt.sign({ YourId: company.YourId }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  Uregister,
  Ulogin,
  Udata,
  Cregister,
  Clogin,
};
