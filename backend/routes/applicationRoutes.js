import express from "express";
import Application from "../models/Application.js";
import upload from "../middleware/upload.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", upload.single("resume"), async (req, res) => {
  let application;

  try {
    application = await Application.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
      message: req.body.message,
      resume: req.file ? req.file.path : "",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }

  res.status(201).json({
    success: true,
    message: "Application submitted successfully",
    data: application,
  });

  const { name, email, phone, position, message } = req.body;

  const appliedOn = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  sendEmail({
    to: process.env.HR_EMAIL,
    subject: `New Job Application - ${position}`,
    html: `
      <div style="max-width:680px;margin:auto;font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
        <div style="background:linear-gradient(135deg,#062c54,#4f813f);padding:28px 24px;color:#ffffff;border-radius:16px 16px 0 0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td>
                <h1 style="margin:0;font-size:24px;">Fairy Business Services</h1>
                <p style="margin:6px 0 0;color:#c7f9cc; font-weight:bold; font-size:13px;">
                  Connecting Talent with Opportunity
                </p>
              </td>
              <td align="right" style="vertical-align:top;">
                <span style="display:inline-block;background:#22c55e;color:#ffffff;font-size:11px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
                  ● New Application
                </span>
              </td>
            </tr>
          </table>
        </div>

        <div style="background:#ffffff;padding:28px 24px;border:1px solid #e2e8f0;border-top:none;">
          <h2 style="margin:0 0 4px;color:#062c54;font-size:22px;">
            ${name}
          </h2>
          <p style="margin:0 0 20px;color:#64748b;font-size:13px;">
            Applied on ${appliedOn}
          </p>

          <div style="display:inline-block;background:#fff7ed;color:#c2410c;font-weight:bold;font-size:14px;padding:8px 16px;border-radius:10px;border:1px solid #fed7aa;margin-bottom:22px;">
            Position: ${position}
          </div>

          <table role="presentation" width="100%" style="border-collapse:collapse;margin-top:6px;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;width:110px;color:#64748b;font-size:13px;">
                Email
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <a href="mailto:${email}" style="color:#0f172a;font-weight:600;text-decoration:none;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">
                Phone
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <a href="tel:${phone}" style="color:#0f172a;font-weight:600;text-decoration:none;">
                  ${phone}
                </a>
              </td>
            </tr>
          </table>

          ${
            message
              ? `<div style="margin-top:22px;">
                  <h3 style="margin:0 0 8px;color:#062c54;font-size:15px;">
                    Message from candidate
                  </h3>
                  <div style="padding:14px 16px;background:#f1f5f9;border-left:4px solid #f97316;border-radius:8px;line-height:1.7;font-size:14px;">
                    ${message}
                  </div>
                </div>`
              : ""
          }

          <div style="margin-top:22px;display:flex;align-items:center;gap:10px;padding:12px 16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
            <span style="font-size:18px;">📎</span>
            <span style="font-size:13px;color:#166534;">
              Resume attached to this email — see attachment above.
            </span>
          </div>

          <table role="presentation" width="100%" style="border-collapse:collapse;margin-top:26px;">
            <tr>
              <td style="padding-right:8px;" width="50%">
                <a href="tel:${phone}" style="display:block;text-align:center;background:#062c54;color:#ffffff;font-weight:bold;font-size:14px;padding:12px;border-radius:10px;text-decoration:none;">
                  📞 Call Candidate
                </a>
              </td>
              <td style="padding-left:8px;" width="50%">
                <a href="mailto:${email}?subject=Regarding your application for ${position}" style="display:block;text-align:center;background:#f97316;color:#ffffff;font-weight:bold;font-size:14px;padding:12px;border-radius:10px;text-decoration:none;">
                  ✉️ Email Candidate
                </a>
              </td>
            </tr>
          </table>

          <div style="margin-top:28px;padding-top:18px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;line-height:1.8;">
            <p style="margin:0;">
              Recruitment | IT Hiring | Non-IT Hiring | Corporate Training | Hospitality Staffing | Campus Hiring
            </p>
            <p style="margin:6px 0 0;">
              Founder: Sandeep Sharma &nbsp;|&nbsp; C.E.O: Hema Raman Sharma
            </p>
            <p style="margin:6px 0 0;">
              +91 88906 28049 &nbsp;|&nbsp; Pratap Nagar, Jaipur, Rajasthan – 302033
            </p>
          </div>
        </div>
      </div>
    `,
    attachments: req.file
      ? [
          {
            filename: req.file.originalname,
            path: req.file.path,
            buffer: req.file.buffer,
          },
        ]
      : [],
  }).catch((error) => {
    console.error(
      `Failed to send HR notification email for application ${application._id}:`,
      error,
    );
  });
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