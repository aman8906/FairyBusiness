// One-time script to populate the Job collection with sample listings
// covering every work mode (Remote, Work From Home, Hybrid, On-site)
// across IT, Non-IT, Hospitality, Banking, Corporate Training and
// Internship categories — so the Career page has real, varied content.
//
// Run from the backend folder:
//   node seedJobs.js
//
// Safe to re-run: it clears existing jobs before inserting fresh ones.
// Comment out the deleteMany() call below if you want to keep existing
// jobs and just add these on top.

import "dotenv/config";
import mongoose from "mongoose";
import Job from "./models/Job.js";

const jobs = [
  // ---------------- IT ----------------
  {
    title: "MERN Stack Developer",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Build and maintain full-stack web applications using MongoDB, Express, React and Node.js. Work closely with design and product teams on new features.",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    isActive: true,
  },
  {
    title: "Frontend Developer (React)",
    location: "Work From Home",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Develop responsive, accessible user interfaces in React. Collaborate with backend developers to integrate APIs and ensure smooth user experience.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Git"],
    isActive: true,
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Hybrid - Pan India",
    type: "Full-time",
    experience: "2-4 Years",
    description:
      "Design and build scalable REST APIs, work with MongoDB/PostgreSQL, and ensure application security and performance.",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "API Design"],
    isActive: true,
  },
  {
    title: "Full Stack Developer",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "3-5 Years",
    description:
      "Own features end-to-end across frontend and backend. Mentor junior developers and contribute to architecture decisions.",
    skills: ["React", "Node.js", "System Design", "MongoDB", "AWS"],
    isActive: true,
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "2-5 Years",
    description:
      "Manage CI/CD pipelines, cloud infrastructure and deployment automation. Ensure system reliability and monitor production environments.",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Kubernetes"],
    isActive: true,
  },
  {
    title: "QA / Test Engineer",
    location: "Work From Home",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Write and execute manual and automated test cases, report bugs, and work with developers to ensure product quality.",
    skills: ["Manual Testing", "Selenium", "API Testing", "Bug Tracking"],
    isActive: true,
  },
  {
    title: "IT Project Manager",
    location: "Hybrid - Pan India",
    type: "Full-time",
    experience: "5-8 Years",
    description:
      "Lead IT project delivery from planning to deployment, coordinate cross-functional teams, and manage client communication and timelines.",
    skills: ["Agile", "Scrum", "Stakeholder Management", "JIRA"],
    isActive: true,
  },
  {
    title: "Data Analyst",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Analyze business data, build dashboards and reports, and support data-driven decision-making across teams.",
    skills: ["SQL", "Excel", "Power BI", "Python"],
    isActive: true,
  },
  {
    title: "Cybersecurity Analyst",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "2-4 Years",
    description:
      "Monitor systems for security threats, conduct vulnerability assessments, and support incident response.",
    skills: ["Network Security", "SIEM", "Vulnerability Assessment"],
    isActive: true,
  },

  // ---------------- Non-IT ----------------
  {
    title: "Sales Executive",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Generate leads, build client relationships, and achieve sales targets for B2B and B2C clients.",
    skills: ["Sales", "Communication", "CRM", "Negotiation"],
    isActive: true,
  },
  {
    title: "HR Executive",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Support recruitment, onboarding, employee engagement and HR documentation for client organizations.",
    skills: ["Recruitment", "HR Policies", "Onboarding", "MS Office"],
    isActive: true,
  },
  {
    title: "Accounts Executive",
    location: "Work From Home",
    type: "Full-time",
    experience: "2-4 Years",
    description:
      "Manage bookkeeping, invoicing, reconciliation and financial reporting using accounting software.",
    skills: ["Tally", "GST", "Excel", "Bookkeeping"],
    isActive: true,
  },
  {
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Plan and execute SEO, social media and paid ad campaigns. Track performance and optimize for engagement and conversions.",
    skills: ["SEO", "Social Media Marketing", "Google Ads", "Analytics"],
    isActive: true,
  },
  {
    title: "Customer Support Executive",
    location: "Work From Home",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Handle customer queries via phone, email and chat, resolve issues promptly and maintain service quality standards.",
    skills: ["Communication", "CRM Tools", "Problem Solving"],
    isActive: true,
  },

  // ---------------- Hospitality ----------------
  {
    title: "Front Office Executive",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Manage guest check-in/check-out, handle reservations and provide excellent front-desk guest service at a partner hotel.",
    skills: ["Guest Service", "Reservations", "Communication"],
    isActive: true,
  },
  {
    title: "Housekeeping Supervisor",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "2-4 Years",
    description:
      "Supervise housekeeping staff, maintain cleanliness standards and coordinate room readiness with front office.",
    skills: ["Team Supervision", "Quality Standards", "Scheduling"],
    isActive: true,
  },
  {
    title: "Chef de Partie",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "3-5 Years",
    description:
      "Manage a specific kitchen section, prepare dishes to standard, and supervise junior kitchen staff at a partner restaurant.",
    skills: ["Culinary Skills", "Food Safety", "Kitchen Management"],
    isActive: true,
  },
  {
    title: "Guest Relations Executive",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Ensure exceptional guest experience, handle feedback and complaints, and coordinate with departments for guest requests.",
    skills: ["Guest Relations", "Communication", "Hospitality Etiquette"],
    isActive: true,
  },

  // ---------------- Banking ----------------
  {
    title: "Relationship Officer - Banking",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Build and manage customer relationships, cross-sell banking products, and achieve business targets for partner banks.",
    skills: ["Banking Products", "Sales", "Customer Relationship"],
    isActive: true,
  },
  {
    title: "Customer Service Executive - Banking",
    location: "Pan India (On-site)",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Assist customers with banking queries, account services and transactions at the branch.",
    skills: ["Customer Service", "Banking Operations", "Communication"],
    isActive: true,
  },
  {
    title: "Banking Operations Executive",
    location: "Work From Home",
    type: "Full-time",
    experience: "1-3 Years",
    description:
      "Support back-office banking operations including documentation, verification and processing support.",
    skills: ["Back Office Operations", "Data Entry", "Compliance"],
    isActive: true,
  },

  // ---------------- Corporate Training ----------------
  {
    title: "Soft Skills Trainer",
    location: "Hybrid - Pan India",
    type: "Full-time",
    experience: "3-6 Years",
    description:
      "Design and deliver soft-skills, communication and leadership training programs customized to client needs.",
    skills: ["Training Delivery", "Communication Skills", "Curriculum Design"],
    isActive: true,
  },
  {
    title: "NLP & POSH Trainer",
    location: "Pan India (On-site)",
    type: "Contract",
    experience: "4-7 Years",
    description:
      "Conduct certified NLP and POSH (Prevention of Sexual Harassment) training workshops for corporate clients.",
    skills: ["NLP", "POSH Compliance", "Workshop Facilitation"],
    isActive: true,
  },

  // ---------------- Internships ----------------
  {
    title: "Web Development Intern (Paid)",
    location: "Remote",
    type: "Internship",
    experience: "Fresher",
    description:
      "Assist in building and testing web features under mentorship. Paid internship with certificate on completion.",
    skills: ["HTML", "CSS", "JavaScript", "React (Basics)"],
    isActive: true,
  },
  {
    title: "HR Intern (Learning/Unpaid)",
    location: "Work From Home",
    type: "Internship",
    experience: "Fresher",
    description:
      "Support recruitment coordination, screening and HR documentation tasks. Great learning opportunity with mentorship.",
    skills: ["MS Office", "Communication", "Organization"],
    isActive: true,
  },
  {
    title: "Digital Marketing Intern (Paid)",
    location: "Remote",
    type: "Internship",
    experience: "Fresher",
    description:
      "Assist with social media content, campaign tracking and basic SEO tasks. Paid internship with certificate.",
    skills: ["Social Media", "Content Writing", "Basic SEO"],
    isActive: true,
  },
  {
    title: "Hospitality Management Intern",
    location: "Pan India (On-site)",
    type: "Internship",
    experience: "Fresher",
    description:
      "Gain hands-on experience across front office, housekeeping and F&B operations at a partner hospitality establishment.",
    skills: ["Guest Service", "Operations", "Teamwork"],
    isActive: true,
  },
];

const seed = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing from environment variables.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected for seeding.");

    // Comment this out if you want to keep existing jobs and only add these.
    await Job.deleteMany({});
    console.log("Cleared existing jobs.");

    const created = await Job.insertMany(jobs);
    console.log(`Inserted ${created.length} jobs successfully.`);
  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected. Seeding complete.");
  }
};

seed();