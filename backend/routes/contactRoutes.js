import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  let enquiry;

  try {
    enquiry = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      service: req.body.service,
      message: req.body.message,
    });
  } catch (error) {
    // Only a genuine save failure should block the response.
    return res.status(500).json({ success: false, message: error.message });
  }

  // Respond to the visitor immediately — don't make them wait on the
  // HR notification email. This is what was causing the slow submit.
  res.status(201).json({
    success: true,
    message: "Enquiry sent successfully",
    data: enquiry,
  });

  // Send the HR notification email in the background via Resend
  // (utils/sendEmail.js). If it fails, it only shows up in server
  // logs — it can no longer block or fail the visitor's request.
  sendEmail({
    to: process.env.HR_EMAIL,
    subject: `New Enquiry - ${req.body.service || "General"}`,
    html: `
      <h2>New Website Enquiry</h2>
      <p><b>Name:</b> ${req.body.name}</p>
      <p><b>Email:</b> ${req.body.email}</p>
      <p><b>Phone:</b> ${req.body.phone}</p>
      <p><b>Service:</b> ${req.body.service}</p>
      <p><b>Message:</b> ${req.body.message}</p>
    `,
  }).catch((error) => {
    console.error(
      `Failed to send HR notification email for enquiry ${enquiry._id}:`,
      error,
    );
  });
});

export default router;