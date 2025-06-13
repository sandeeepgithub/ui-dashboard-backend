const JobModel = require("../models/JobModel.js");
const catchAsyncError = require("../utils/catchAsyncErrors.js");

exports.getJobs = catchAsyncError(async (req, res, next) => {
  const queryObj = {};

  if (req.query.title) {
    queryObj.title = { $regex: req.query.title, $options: "i" };
  }

  if (req.query.profile) {
    queryObj.profile = { $regex: req.query.profile, $options: "i" };
  }

  if (req.query.minExp || req.query.maxExp) {
    const { minExp, maxExp } = req.query;

    if (
      (minExp !== undefined && isNaN(Number(minExp))) ||
      (maxExp !== undefined && isNaN(Number(maxExp)))
    ) {
      return res.status(400).json({
        message: "Invalid minimum or maximum experience value",
      });
    }

    queryObj.experience = {};
    if (req.query.minExp) {
      queryObj.experience.$gte = Number(req.query.minExp);
    }
    if (req.query.maxExp) {
      queryObj.experience.$lte = Number(req.query.maxExp);
    }
  }

  if (req.query.employmentType) {
    queryObj.employmentType = {
      $regex: req.query.employmentType,
      $options: "i",
    };
  }

  const jobs = await JobModel.find(queryObj);
  const totalJobs = await JobModel.countDocuments();

  let message = "success";
  if (jobs.length === 0) {
    message = "No jobs found";
  }

  res.status(200).json({
    message,
    data: jobs,
    total: totalJobs,
  });
});
