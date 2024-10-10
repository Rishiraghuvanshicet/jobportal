const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const companyRoutes = require("./routes/companyRoute");
const userRoutes = require("./routes/userRoute");
const application = require('./routes/application');
const connectDB = require("./db/db");

const SECRET_KEY = "your_secret_key";
const app = express();
const PORT = 3000;


// Middleware
app.use(cors());
app.use(express.json());

//Connect DataBase
connectDB();


// Token Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

//Routes
app.use('/user',userRoutes)
app.use('/company',companyRoutes)
app.use('/api', application);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports={
  authenticateToken,
}
