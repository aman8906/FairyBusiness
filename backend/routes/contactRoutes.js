import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    await sendEmail({
      to: process.env.HR_EMAIL,
      subject: `New  Fairy Business Services Enquiry - ${service}`,
      html: `
        <div style="max-width:680px;margin:auto;font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
          <div style="background:linear-gradient(135deg,#062c54,#4f813f);padding:24px;color:#ffffff;border-radius:14px 14px 0 0;">
            <h1 style="margin:0;font-size:26px;">
              Fairy Business Services Management Consultancy
            </h1>

            <p style="margin:8px 0 0;color:#fde68a;">
              Connecting Talent with Opportunity.
            </p>
          </div>

          <div style="background:#ffffff;padding:24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 14px 14px;">
            <h2 style="margin-top:0;color:#062c54;">
              New Website Enquiry
            </h2>

            <table style="width:100%;border-collapse:collapse;margin-top:20px;">
              <tr>
                <td style="padding:10px;font-weight:bold;width:150px;">
                  Name
                </td>
                <td style="padding:10px;">
                  ${name}
                </td>
              </tr>

              <tr style="background:#f8fafc;">
                <td style="padding:10px;font-weight:bold;">
                  Email
                </td>
                <td style="padding:10px;">
                  <a href="mailto:${email}" style="color:#7c3aed;">
                    ${email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">
                  Phone
                </td>
                <td style="padding:10px;">
                  <a href="tel:${phone}" style="color:#7c3aed;">
                    ${phone}
                  </a>
                </td>
              </tr>

              <tr style="background:#f8fafc;">
                <td style="padding:10px;font-weight:bold;">
                  Required Service
                </td>
                <td style="padding:10px;">
                  ${service}
                </td>
              </tr>
            </table>

            <div style="margin-top:24px;">
              <h3 style="margin-bottom:10px;color:#062c54;">
                Requirements
              </h3>

              <div style="padding:16px;background:#f1f5f9;border-left:4px solid #f97316;border-radius:8px;line-height:1.7;">
                ${message}
              </div>
            </div>

            <div style="margin-top:28px;padding-top:18px;border-top:1px solid #e2e8f0;color:#64748b;font-size:13px;">
              <p style="margin:0;">
                HR Consulting | Recruitment | IT Hiring | Non-IT Hiring | Outsourcing
              </p>

              <p style="margin:8px 0 0;">
                Founder: Sandeep Sharma
              </p>

              <p style="margin:8px 0 0;">
                C.E.O: Hema Raman Sharma
              </p>

              <p style="margin:8px 0 0;">
                Phone: +91 88906 28049
              </p>

              <p style="margin:8px 0 0;">
                Pratap Nagar, Jaipur, Rajasthan – 302033
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Unable to submit enquiry",
    });
  }
});

export default router;