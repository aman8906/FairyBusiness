import { Resend } from "resend";
import fs from "fs/promises";

let resendClient = null;

const getResendClient = () => {
  if (resendClient) return resendClient;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing in .env");
  }

  resendClient = new Resend(apiKey);
  return resendClient;
};

// Resend needs attachment content as a Buffer/base64 string — handle
// BOTH multer storage modes:
//   - diskStorage   -> attachment.path   (file saved to disk)
//   - memoryStorage -> attachment.buffer (file kept in memory only)
// Only checking `.path` silently drops attachments when multer is
// configured with memoryStorage — that was the "resume not arriving"
// bug.
const buildAttachments = async (attachments = []) => {
  const builtAttachments = [];

  for (const attachment of attachments) {
    if (!attachment) continue;

    const filename =
      attachment.filename || attachment.originalname || "attachment";

    if (attachment.buffer) {
      builtAttachments.push({
        filename,
        content: attachment.buffer.toString("base64"),
      });
      continue;
    }

    if (attachment.path) {
      try {
        const fileBuffer = await fs.readFile(attachment.path);
        builtAttachments.push({
          filename,
          content: fileBuffer.toString("base64"),
        });
      } catch (error) {
        console.error(
          `sendEmail: could not read attachment at "${attachment.path}":`,
          error.message,
        );
      }
      continue;
    }

    console.warn(
      `sendEmail: attachment "${filename}" has neither a buffer nor a path — skipped.`,
    );
  }

  return builtAttachments;
};

const sendEmail = async ({
  to,
  subject,
  html,
  text,
  replyTo,
  attachments = [],
}) => {
  const demoRecipient = process.env.HR_EMAIL;

  if (!demoRecipient) {
    throw new Error("HR_EMAIL is missing in .env");
  }

  const resend = getResendClient();
  const resendAttachments = await buildAttachments(attachments);

  // Until a custom domain is verified, force every real email
  // to the Resend account owner's email address.
  const recipients =
    process.env.NODE_ENV === "production" &&
    process.env.RESEND_DOMAIN_VERIFIED === "true"
      ? Array.isArray(to)
        ? to
        : [to]
      : [demoRecipient];

  const emailPayload = {
    from:
      process.env.EMAIL_FROM ||
      "Fairy Business Services <onboarding@resend.dev>",
    to: recipients,
    subject,
  };

  if (html) emailPayload.html = html;
  if (text) emailPayload.text = text;
  if (replyTo) emailPayload.replyTo = replyTo;

  if (resendAttachments.length > 0) {
    emailPayload.attachments = resendAttachments;
  }

  const { data, error } = await resend.emails.send(emailPayload);

  if (error) {
    throw new Error(
      `Resend failed to send email: ${
        error.message || JSON.stringify(error)
      }`,
    );
  }

  console.log("Email sent successfully:", data?.id);

  return data;
};

export default sendEmail;