import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    // Set up your SMTP service (like Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., use Gmail, SendGrid, etc.
      auth: {
        user: "your-email@gmail.com",  // Your email
        pass: "your-email-password",  // Your email password or an app-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: "alimajid03021980@gmail.com", // Your email
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
