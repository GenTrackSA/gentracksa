import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "" } = await req.json();

    // Basic input guard
    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Missing email or message" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,          // smtp.gmail.com
      port: Number(process.env.SMTP_PORT),  // 465
      secure: true,                         // true for 465
      auth: {
        user: process.env.SMTP_USER,        // GenTrackSA@gmail.com
        pass: process.env.SMTP_PASS,        // App Password
      },
    });

    // Optional: verify credentials early (helps with clearer logs)
    await transporter.verify();

    const to = process.env.CONTACT_TO || process.env.SMTP_USER!;
    await transporter.sendMail({
      from: `GenTrack SA Website <${process.env.SMTP_USER}>`, // must match authenticated user for Gmail
      to,
      replyTo: email,
      subject: `New enquiry from ${name || "Website"}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    // Surface a hint in logs
    console.error("Contact API error:", e?.message || e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
