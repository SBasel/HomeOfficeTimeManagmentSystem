import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = (personalid, startTime, endTime) => {
  const emailHost = process.env.EMAIL_HOST;
  const emailPort = process.env.EMAIL_PORT;

  const recipientEmail = process.env.RECIPIENT_EMAIL;

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: recipientEmail,
    subject: `Timestamp Information (Personal ID: ${personalid})`,
    text: `Start Time: ${startTime}\nEnd Time: ${endTime}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
