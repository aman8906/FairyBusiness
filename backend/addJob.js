// One-off script to add a single new job WITHOUT touching existing
// jobs already in the database (unlike seedJobs.js, this does NOT
// clear the collection first).
//
// Run from the backend folder:
//   node addJob.js

import "dotenv/config";
import mongoose from "mongoose";
import Job from "./models/Job.js";

const newJob = {
  title: "Front Office Executive (Female Only)",
  location: "Pan India (On-site)",
  type: "Full-time",
  experience: "1-2 Years",
  description:
    "Be the first smile guests see and create lasting impressions. " +
    "Welcome and assist guests with a professional attitude, handle " +
    "check-in / check-out and guest inquiries, manage reservations and " +
    "maintain guest records, and ensure guest satisfaction by delivering " +
    "excellent service.\n\n" +
    "Requirements: Female candidates only. Graduate in any stream. " +
    "Fluent in English (spoken & written). Hospitality background " +
    "preferred. 1-2 years of experience in Front Office, Reception or " +
    "Guest Services.",
  skills: [
    "Guest Service",
    "Front Office Operations",
    "Reservations Management",
    "Fluent English (Spoken & Written)",
  ],
  isActive: true,
};

const addJob = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing from environment variables.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected.");

    const created = await Job.create(newJob);
    console.log(`Job added successfully: "${created.title}" (id: ${created._id})`);
  } catch (error) {
    console.error("Failed to add job:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
  }
};

addJob();