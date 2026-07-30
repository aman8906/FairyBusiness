// One-off script to add new listings WITHOUT touching existing jobs
// already in the database (does NOT clear the collection first).
//
// Run from the backend folder:
//   node addJobs2.js
//
// NOTE: This version contains 4 NEW jobs (Field Executive, Computer
// Operator, Sales Executive, HR Internship). If you have NOT yet run
// the earlier version of this file (Training Program, Axis Max
// Insurance Advisor, IDFC Bank Sales), add those back into the array
// below before running, or run them separately first — otherwise they
// won't be in the database.

import "dotenv/config";
import mongoose from "mongoose";
import Job from "./models/Job.js";

const newJobs = [
  {
    title: "Field Executive",
    location: "Vidhyadhar Nagar, Jaipur (On-site)",
    type: "Full-time",
    experience: "Entry Level",
    description:
      "Fairy Business Services is hiring a Field Executive. Grow your career " +
      "with a dynamic, supportive and stable team.\n\n" +
      "Eligibility: Male candidates only. Minimum qualification: 10th pass.\n" +
      "Salary: Attractive salary + conveyance allowance.\n\n" +
      "Interested candidates can share their resume on WhatsApp: 8890628049. " +
      "Apply now and start your career today.",
    skills: ["Field Work", "Communication", "Time Management"],
    isActive: true,
  },
  {
    title: "Computer Operator",
    location: "Jaipur, Rajasthan (On-site)",
    type: "Full-time",
    experience: "Any Experience Level",
    description:
      "Fairy Business Services is hiring a Computer Operator. Join us and be " +
      "part of a growing, supportive team.\n\n" +
      "Hiring: Any male / female.\n" +
      "Required skills: Good knowledge of Internet, Social Media and MS-Office.\n" +
      "Qualification: Any graduate.\n" +
      "Salary: ₹15,000 to ₹20,000 per month.\n\n" +
      "Apply now — send your resume on WhatsApp or call 8890628049.",
    skills: ["Internet", "Social Media", "MS Office", "Computer Operations"],
    isActive: true,
  },
  {
    title: "Sales Executive (Male)",
    location: "Udaipur, Jodhpur, Ganganagar, Hanumangarh, Sikar, Alwar, Kota, Jaipur (On-site)",
    type: "Full-time",
    experience: "2-3 Years in Field Sales",
    description:
      "Fairy Business Services is hiring a Sales Executive for field sales " +
      "roles across multiple Rajasthan locations. Join our team and build a " +
      "successful career with us.\n\n" +
      "Qualification: Graduate.\n" +
      "Requirement: Own bike is a must.\n" +
      "Salary: Starting from ₹20,000 per month + travel allowance.\n\n" +
      "Apply now on WhatsApp: 8890628049.",
    skills: [
      "Field Sales",
      "Communication",
      "Target Achievement",
      "Two-Wheeler License",
    ],
    isActive: true,
  },
  {
    title: "HR Internship Program (Females & Freshers Only)",
    location: "Remote / Jaipur Basis (Flexible)",
    type: "Internship",
    experience: "Fresher",
    description:
      "Exciting opportunity — join our HR Internship Program and build your " +
      "career in HR.\n\n" +
      "Eligibility: Fresh graduates, females only.\n" +
      "Location: Remote / Jaipur basis with flexible work options.\n" +
      "Duration: 3-6 months, with stipend and certificate on completion.\n\n" +
      "Gain hands-on HR experience in Recruitment, Employee Engagement and " +
      "Administration, with mentorship from experienced professionals.\n\n" +
      "Apply now — send your resume on WhatsApp or call 8890628049.",
    skills: [
      "HR Recruitment",
      "Employee Engagement",
      "Administration",
      "MS Office",
    ],
    isActive: true,
  },
];

const addJobs = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing from environment variables.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected.");

    const created = await Job.insertMany(newJobs);
    console.log(`Added ${created.length} new jobs successfully:`);
    created.forEach((job) => console.log(` - ${job.title} (id: ${job._id})`));
  } catch (error) {
    console.error("Failed to add jobs:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
  }
};

addJobs();