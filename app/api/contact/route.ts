// app/api/contact/route.ts
// import { verifyRecaptcha } from "@/lib/recaptcha";
// import { validateFormData } from "@/lib/validation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  // // Validate reCAPTCHA
  // if (!(await verifyRecaptcha(formData.recaptchaToken))) {
  //   return NextResponse.json(
  //     { error: "reCAPTCHA verification failed" },
  //     { status: 400 },
  //   );
  // }

  // // Validate form data
  // const { isValid, errors } = validateFormData(formData);
  // if (!isValid) {
  //   return NextResponse.json(
  //     { error: "Invalid form data", errors },
  //     { status: 400 },
  //   );
  // }

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: true,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Secure Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_RECIPIENT,
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
