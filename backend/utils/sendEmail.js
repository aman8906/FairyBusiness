import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Fairy Business Service" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    attachments
  });
};

export default sendEmail;