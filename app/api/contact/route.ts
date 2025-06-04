// app/api/contact/route.ts
import { verifyRecaptcha } from "@/lib/recaptcha";
import { validateFormData } from "@/lib/validation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  // Validate reCAPTCHA
  if (!(await verifyRecaptcha(formData.recaptchaToken))) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed" },
      { status: 400 },
    );
  }

  // Validate form data
  const { isValid, errors } = validateFormData(formData);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid form data", errors },
      { status: 400 },
    );
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Secure Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_EMAIL_RECIPIENT,
      subject: `New Contact: ${formData.name}`,
      html: `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          <hr>
          <p>Sent via secure form on ${new Date().toLocaleString()}</p>
        `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

// Add OPTIONS method for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
