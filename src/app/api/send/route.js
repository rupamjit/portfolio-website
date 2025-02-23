import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: process.env.SMTP_USER, 
      subject: `Subject: ${subject}`, 
      text: `Message from ${email}:\n\n${message}`,
      replyTo: email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
