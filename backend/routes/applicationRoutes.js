import express from "express";
import Application from "../models/Application.js";
import upload from "../middleware/upload.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const application = await Application.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
      message: req.body.message,
      resume: req.file ? req.file.path : ""
    });

    await sendEmail({
      to: process.env.HR_EMAIL,
      subject: `New Job Application - ${req.body.position}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${req.body.name}</p>
        <p><b>Email:</b> ${req.body.email}</p>
        <p><b>Phone:</b> ${req.body.phone}</p>
        <p><b>Position:</b> ${req.body.position}</p>
        <p><b>Message:</b> ${req.body.message}</p>
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: req.file.path
            }
          ]
        : []
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;