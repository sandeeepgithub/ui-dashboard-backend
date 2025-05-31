const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  experience: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  employmentType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
    required: true,
  },
  salary: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
  },
  status: {
    type: String,
    enum: ["Open", "Closed", "Draft"],
    default: "Open",
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  applicationsReceived: {
    type: Number,
    default: 0,
  },
  hired: {
    type: Number,
    default: 0,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  underProcess: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
