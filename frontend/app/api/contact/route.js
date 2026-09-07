import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, message, terms } = body;

    // Server-side validation check
    if (!fullName || !phone || !message || !terms) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields and accept the terms.' },
        { status: 400 }
      );
    }

    // If Resend API key is configured, send actual email
    if (resend) {
      await resend.emails.send({
        from: 'Auto TintGard Website <onboarding@resend.dev>', // Update with your verified domain in production
        to: ['dummyayush121@gmail.com'],// Replace with your actual recipient email.
        subject: `New Quote Request from ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; border-radius: 10px;">
            <h2 style="color: #1e40af;">New Quote Request - Auto TintGard</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
          </div>
        `,
      });
    } else {
      // Fallback console log for local development testing without API key
      console.log('--- MOCK EMAIL SENT ---');
      console.log({ fullName, phone, message, timestamp: new Date().toISOString() });
    }

    return NextResponse.json(
      { success: true, message: 'Your quote request has been sent successfully! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try calling us directly at 0483 955 426.' },
      { status: 500 }
    );
  }
}