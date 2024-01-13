import { sendEmail } from "./emailSender.js";

export const email = async (req, res, next) => {
  try {
    const { startTime, endTime } = req.body;
    const personalid = req.user.personalid;

    sendEmail(personalid, startTime, endTime);

    next();
  } catch (error) {
    console.error("Error sending email:", error);
    next(error);
  }
};
