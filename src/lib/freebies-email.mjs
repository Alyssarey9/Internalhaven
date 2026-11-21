import { Resend } from 'resend';

export async function sendFreebiesEmail(message) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Freebies email: RESEND_API_KEY missing; delivery skipped.');
    return;
  }
  return new Resend(process.env.RESEND_API_KEY).emails.send(message);
}

const tools = [
  'How to Be Your Own Bestie!',
  'Tips to Cultivate a Growth Mindset',
  'Emotion Self-Regulation Technique',
];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export function buildFreebiesEmails(fullName, email, signupAt = new Date()) {
  const firstName = fullName.trim().split(/\s+/)[0] || 'friend';
  const bookingUrl = 'https://calendly.com/alyssarey9/60min';
  const privacyUrl = 'https://www.internalhaven.com/privacy';
  const workbook = 'Intro to Life Coaching Workbook';
  const messages = [
    {
      subject: 'Welcome to Internal Haven — your workbook is here 💜',
      body: "I'm so glad you're here! Your free Intro to Life Coaching Workbook is attached. Take it at your own pace as you begin exploring what matters most to you. In a week, I'll send you three more tools for self-love, growth and emotional well-being, then a little check-in the following week.",
      files: [workbook],
      days: 0,
    },
    {
      subject: 'Three gentle tools for your growth 💜',
      body: "As promised, here are three more tools to support your journey: How to Be Your Own Bestie!, Tips to Cultivate a Growth Mindset, and Emotion Self-Regulation Technique. They're attached for you to explore whenever you're ready. Small steps count, and you don't have to figure it all out alone.",
      files: tools,
      days: 7,
    },
    {
      subject: 'How are you getting on with your tools?',
      body: "Just checking in — how have you been getting on with your workbook and tools? If anything brought up a question, or you're not sure where to start, simply hit reply. I'd love to hear from you and support your next small step.",
      files: [],
      days: 14,
    },
  ];
  return messages.map(({ subject, body, files, days }) => ({
    from: 'Alyssa at Internal Haven <alyssa@internalhaven.com>',
    replyTo: 'alyssa@internalhaven.com',
    to: [email],
    subject,
    text: `Hi ${firstName},\n\n${body}\n\nBook a free 45-minute clarity call: ${bookingUrl}\n\n${days < 14 ? "These are coaching tools. They aren't therapy or medical advice.\n\n" : ''}With warmth,\nAlyssa\nInternal Haven\n\nIf you're in crisis, call or text 988 in the US, or contact your local emergency number.\n[Mailing address — owner to confirm]\nPrivacy Policy: ${privacyUrl}`,
    html: `<div style="background:#F5F0EA;color:#3C3342;padding:24px;font:16px/1.6 Georgia,serif"><div style="max-width:600px;margin:auto;background:white;border-radius:18px;overflow:hidden"><div style="background:#5D4B69;color:#F5F0EA;padding:20px 28px;font:24px Arial,sans-serif">Internal Haven</div><div style="padding:28px"><p>Hi ${escapeHtml(firstName)},</p><p>${escapeHtml(body)}</p><p><a href="${bookingUrl}" style="display:inline-block;padding:14px 22px;background:#5D4B69;color:#F5F0EA;border-radius:24px;text-decoration:none;font-weight:bold">Book a free 45-minute clarity call</a></p>${days < 14 ? "<p>These are coaching tools. They aren't therapy or medical advice.</p>" : ''}<p>With warmth,<br>Alyssa<br>Internal Haven</p><p style="font-size:14px">If you're in crisis, call or text 988 in the US, or contact your local emergency number.</p><p style="font-size:14px">[Mailing address — owner to confirm]<br><a href="${privacyUrl}">Privacy Policy</a></p></div></div></div>`,
    ...(days ? { scheduledAt: new Date(signupAt.getTime() + days * 86400000).toISOString() } : {}),
    ...(files.length ? { attachments: files.map((tool) => ({
      filename: `${tool}.pdf`,
      path: `https://www.internalhaven.com/tools/${encodeURIComponent(`${tool}.pdf`)}`,
    })) } : {}),
  }));
}
