const mongoose = require("mongoose");
const { Schema } = mongoose;
const CompanySchema = mongoose.Schema({
  managerId: { type: Schema.Types.ObjectId, ref: "User" },
  users: [
    {
      userId: {
        type: String,
        required:true,
        ref:'User'
      },
    },
  ],
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  contactName: {
    type: String,
    trim: true,
  },
  contactNumber: {
    type: String,
    trim: true,
  },
  contactJobTitle: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
});
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
