import nodemailer from 'nodemailer';

/**
 * Send inquiry notification email to admin.
 * Uses Gmail SMTP with App Password.
 * Set SMTP_EMAIL and SMTP_PASSWORD in .env
 */
export const sendInquiryEmail = async (inquiry) => {
  const smtpEmail = process.env.SMTP_EMAIL || 'shivamgate21@gmail.com';
  const smtpPassword = process.env.SMTP_PASSWORD;

  // If no SMTP password configured, log warning and skip
  if (!smtpPassword) {
    console.warn('[Email] SMTP_PASSWORD not set in .env — skipping email notification.');
    console.log('[Email] New inquiry from:', inquiry.name, '|', inquiry.email, '|', inquiry.phone);
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: `"Vanguard Digital — New Inquiry" <${smtpEmail}>`,
    to: smtpEmail,
    subject: `🔔 New Project Inquiry from ${inquiry.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f6; border-radius: 8px; overflow: hidden;">
        <div style="background: #0D1117; padding: 28px 32px;">
          <h1 style="color: #C8A96B; margin: 0; font-size: 20px; letter-spacing: 1px;">🏢 New Project Inquiry Received</h1>
          <p style="color: #8b949e; margin: 8px 0 0; font-size: 13px;">via Vanguard Digital Website</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; width: 140px; vertical-align: top;">Full Name</td>
              <td style="padding: 10px 0; color: #202624;">${inquiry.name}</td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #202624;"><a href="mailto:${inquiry.email}" style="color: #C8A96B;">${inquiry.email}</a></td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Phone / WhatsApp</td>
              <td style="padding: 10px 0; color: #202624;"><a href="tel:${inquiry.phone}" style="color: #C8A96B;">${inquiry.phone}</a></td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #202624;">${inquiry.company || 'Not specified'}</td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Service Required</td>
              <td style="padding: 10px 0; color: #202624; font-weight: 600;">${inquiry.service}</td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Budget Range</td>
              <td style="padding: 10px 0; color: #202624;">${inquiry.budget}</td>
            </tr>
            <tr style="border-top: 1px solid #e8e6df;">
              <td style="padding: 10px 0; color: #68707C; font-weight: 600; vertical-align: top;">Project Details</td>
              <td style="padding: 10px 0; color: #202624; white-space: pre-wrap; line-height: 1.6;">${inquiry.message}</td>
            </tr>
          </table>
        </div>
        <div style="background: #0D1117; padding: 16px 32px; text-align: center;">
          <p style="color: #68707C; font-size: 11px; margin: 0;">
            Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
          <p style="color: #C8A96B; font-size: 11px; margin: 6px 0 0;">
            Reply directly to this email or call the client at ${inquiry.phone}
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('[Email] Inquiry notification sent to', smtpEmail);
  } catch (error) {
    console.error('[Email] Failed to send notification:', error.message);
    // Don't throw — email failure shouldn't block the inquiry submission
  }
};
