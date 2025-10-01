import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.BURNER_USERNAME; // Gmail address
  const password = process.env.BURNER_PASSWORD; // Gmail App Password
  const myEmail = process.env.PERSONAL_EMAIL;   // Your personal email (receiver)

  try {
    const formData = await request.formData();

    const name = formData.get("name");       // Full Name
    const phone = formData.get("phone");     // Phone
    const email = formData.get("email");     // Email
    const service = formData.get("service"); // Select Services
    const message = formData.get("message"); // Write a Message

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,         // SSL
      secure: true,      // true for port 465
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}
