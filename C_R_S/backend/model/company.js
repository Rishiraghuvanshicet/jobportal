const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  CompanyName: { type: String },
  YourId: { type: Number },
  HrName: { type: String },
  ContactNumber: { type: Number },
  City: { type: String },
  UserName: { type: String, required: true},
  password: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
