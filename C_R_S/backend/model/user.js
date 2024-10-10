const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String },
  DOB: { type: String },
  email: { type: String, required: true },
  Branch: { type: String },
  XIIPercentage: { type: String },
  XPercentage: { type: String },
  Experiece: { type: Number},
  phone: { type: Number },
  city: { type: String },
  password: { type: String, required: true },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
