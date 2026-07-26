import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  let contact;

  try {
    contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Unable to submit enquiry",
    });
  }

  res.status(201).json({
    success: true,
    message: "Enquiry submitted successfully",
    data: contact,
  });

  const receivedOn = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  sendEmail({
    to: process.env.HR_EMAIL,
    subject: `New Fairy Business Services Enquiry - ${service}`,
    html: `
      <div style="max-width:680px;margin:auto;font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
        <div style="background:linear-gradient(135deg,#f97316,#062c54);padding:28px 24px;color:#ffffff;border-radius:16px 16px 0 0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td>
                <h1 style="margin:0;font-size:24px;">Fairy Business Services</h1>
                <p style="margin:6px 0 0;color:#ffedd5;font-size:13px;">
                  Connecting Talent with Opportunity
                </p>
              </td>
              <td align="right" style="vertical-align:top;">
                <span style="display:inline-block;background:#3b82f6;color:#ffffff;font-size:11px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
                  ● New Enquiry
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
            Website enquiry received on ${receivedOn}
          </p>

          <div style="display:inline-block;background:#062c54;color:#ffffff;font-weight:bold;font-size:14px;padding:8px 16px;border-radius:10px;margin-bottom:22px;">
            Service Requested: ${service}
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

          <div style="margin-top:22px;">
            <h3 style="margin:0 0 8px;color:#062c54;font-size:15px;">
              Requirements
            </h3>
            <div style="padding:14px 16px;background:#eff6ff;border-left:4px solid #3b82f6;border-radius:8px;line-height:1.7;font-size:14px;">
              ${message}
            </div>
          </div>

          <table role="presentation" width="100%" style="border-collapse:collapse;margin-top:26px;">
            <tr>
              <td style="padding-right:8px;" width="50%">
                <a href="tel:${phone}" style="display:block;text-align:center;background:#062c54;color:#ffffff;font-weight:bold;font-size:14px;padding:12px;border-radius:10px;text-decoration:none;">
                  📞 Call Enquirer
                </a>
              </td>
              <td style="padding-left:8px;" width="50%">
                <a href="mailto:${email}?subject=Regarding your enquiry - ${service}" style="display:block;text-align:center;background:#3b82f6;color:#ffffff;font-weight:bold;font-size:14px;padding:12px;border-radius:10px;text-decoration:none;">
                  ✉️ Email Enquirer
                </a>
              </td>
            </tr>
          </table>

          <div style="margin-top:28px;padding-top:18px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;line-height:1.8;">
            <p style="margin:0;">
              HR Consulting | Recruitment | IT Hiring | Non-IT Hiring | Outsourcing
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
  }).catch((error) => {
    console.error(
      `Failed to send HR notification email for enquiry ${contact._id}:`,
      error,
    );
  });
});

export default router;