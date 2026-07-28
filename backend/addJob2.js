// One-off script to add 3 new listings WITHOUT touching existing jobs
// already in the database (does NOT clear the collection first).
//
// Run from the backend folder:
//   node addJobs2.js

import "dotenv/config";
import mongoose from "mongoose";
import Job from "./models/Job.js";

const newJobs = [
  {
    title: "Virtual Soft Skills & Personality Development Training (with AI Guideline)",
    location: "Virtual / Online",
    type: "Training Program",
    experience: "Anyone Can Apply — Freshers to Experienced",
    description:
      "Invest in yourself and shape your future with our virtual Soft Skills & " +
      "Personality Development program, guided with AI-based tools. Limited " +
      "seats — enroll now.\n\n" +
      "Program includes:\n" +
      "• Soft Skills — Communication, Confidence, Teamwork & More\n" +
      "• Personality Development — Build a Positive Mindset, Personal Brand & Leadership\n" +
      "• Resume Building & ATS Support — AI-optimized resume that gets you noticed\n" +
      "• Mock Interview Skills — Real-time practice with expert feedback\n" +
      "• Placement Assistance — Job opportunities, career guidance & support\n\n" +
      "Anyone can apply. Enhance your skills, boost your confidence, get hired, " +
      "and achieve your career goals.",
    skills: [
      "Communication",
      "Confidence Building",
      "Personality Development",
      "Resume Building (ATS)",
      "Mock Interview Practice",
      "Placement Assistance",
    ],
    isActive: true,
  },
  {
    title: "Insurance Advisor - Axis Max Life Insurance (Part of Axis Bank)",
    location: "Jaipur, Rajasthan",
    type: "Flexible / Commission-Based",
    experience: "Any Experience Level — Open to All",
    description:
      "Be a part of a legacy — build a future you deserve with Axis Max Life " +
      "Insurance, part of the trusted Axis Bank family.\n\n" +
      "Who can join: Housewives looking for financial independence, working " +
      "professionals wanting additional income and career growth, and retired " +
      "individuals looking to stay active and earn meaningfully.\n\n" +
      "What you get: Attractive earning opportunities with performance-based " +
      "incentives, best-in-class training, complete support from experienced " +
      "leaders, a flexible and rewarding career on your own terms, high income " +
      "potential, recognition and achievements, exciting trips and rewards, " +
      "and growth and leadership opportunities.\n\n" +
      "Contact: Sandeep Sharma, AADM | Axis Max Life Insurance, Jaipur Branch " +
      "(Part of Axis Bank), Calgiri Road, Malviya Nagar, Jaipur.",
    skills: [
      "Sales",
      "Relationship Building",
      "Communication",
      "Self-Motivation",
    ],
    isActive: true,
  },
  {
    title: "Banking Product Sales Executive - IDFC FIRST Bank (Calling Process)",
    location: "Thane, Jui Nagar, Maharashtra (On-site)",
    type: "Full-time",
    experience: "1-2 Years in Banking Product Sales (Calling Process)",
    description:
      "Join a growing team and build your career in banking sales with IDFC " +
      "FIRST Bank.\n\n" +
      "Qualification: Graduate in any stream.\n" +
      "Language: Fluent in English.\n" +
      "Salary: ₹18,000 to ₹22,000 per month + incentives.\n\n" +
      "Why join us: Attractive salary and incentives, career growth " +
      "opportunities, a supportive and friendly work environment, and the " +
      "chance to learn, grow and succeed.\n\n" +
      "Interested candidates can share their resume on WhatsApp.",
    skills: [
      "Banking Product Sales",
      "Tele-calling",
      "Customer Communication",
      "Target Achievement",
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