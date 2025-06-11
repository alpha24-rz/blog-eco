import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  // Transporter email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ecosystem4.0.nft@gmail.com",
      pass: process.env.EMAIL_PASSWORD, // disimpan di .env.local
    },
  });

  const mailOptions = {
    from: "ecosystem4.0.nft@gmail.com",
    to: "ecosystem4.0.nft@gmail.com",
    subject: "New Newsletter Subscription",
    text: `New subscriber: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Subscription successful." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
