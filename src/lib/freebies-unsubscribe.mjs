import { createHmac, timingSafeEqual } from 'node:crypto';
import { Resend } from 'resend';

const idPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function createUnsubscribeToken(ids, secret) {
  const payload = Buffer.from(JSON.stringify(ids)).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function verifyUnsubscribeToken(token, secret) {
  if (!secret || typeof token !== 'string' || token.length > 512) return null;
  const parts = token.split('.');
  if (parts.length !== 2 || !parts.every((part) => /^[A-Za-z0-9_-]+$/.test(part))) return null;
  const expected = createHmac('sha256', secret).update(parts[0]).digest();
  const received = Buffer.from(parts[1], 'base64url');
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return null;
  try {
    const ids = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
    return Array.isArray(ids) && ids.length <= 2 && ids.every((id) => typeof id === 'string' && idPattern.test(id))
      ? [...new Set(ids)] : null;
  } catch {
    return null;
  }
}

export function withUnsubscribe(message, ids, secret) {
  if (!secret) return message;
  const url = `https://www.internalhaven.com/api/freebies/unsubscribe?t=${createUnsubscribeToken(ids, secret)}`;
  return {
    ...message,
    text: message.text.replace('Privacy Policy:', `Unsubscribe: ${url}\nPrivacy Policy:`),
    html: message.html.replace('<a href="https://www.internalhaven.com/privacy">', `<a href="${url}">Unsubscribe</a> · <a href="https://www.internalhaven.com/privacy">`),
    headers: { 'List-Unsubscribe': `<${url}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
  };
}

export async function cancelFreebiesEmail(id) {
  if (!process.env.RESEND_API_KEY) throw new Error('Email service unavailable');
  return new Resend(process.env.RESEND_API_KEY).emails.cancel(id);
}

function page(title, body, status = 200) {
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Internal Haven</title></head><body style="margin:0;background:#F5F0EA;color:#3C3342;font:18px/1.6 Georgia,serif;padding:40px 20px"><main style="max-width:600px;margin:30px auto;background:white;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px #5D4B6920"><header style="background:#5D4B69;color:#F5F0EA;padding:24px 32px;font:24px Arial,sans-serif">Internal Haven</header><section style="padding:32px"><h1 style="font: bold 28px Arial,sans-serif;color:#5D4B69">${title}</h1>${body}</section></main></body></html>`, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Robots-Tag': 'noindex', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'" },
  });
}

export function createUnsubscribeHandlers({ secret = () => process.env.FREEBIES_UNSUBSCRIBE_SECRET, cancel = cancelFreebiesEmail, warn = console.warn } = {}) {
  const read = (request) => verifyUnsubscribeToken(new URL(request.url).searchParams.get('t'), secret());
  return {
    GET: async (request) => {
      if (read(request) === null) return page('Invalid link', '<p>This unsubscribe link is invalid. Please use the link in your email.</p>', 400);
      const token = new URL(request.url).searchParams.get('t');
      return page('Unsubscribe', `<p>Stop your remaining Internal Haven follow-up emails?</p><form method="post" action="/api/freebies/unsubscribe?t=${encodeURIComponent(token)}"><button style="background:#5D4B69;color:#F5F0EA;border:0;border-radius:24px;padding:14px 24px;font:bold 18px Arial;cursor:pointer" type="submit">Unsubscribe</button></form>`);
    },
    POST: async (request) => {
      const ids = read(request);
      if (ids === null) return page('Invalid link', '<p>This unsubscribe link is invalid. Please use the link in your email.</p>', 400);
      let failed = false;
      for (const id of ids) {
        try {
          const result = await cancel(id);
          if (result?.error && !/already (?:been )?(?:sent|cancelled|canceled)/i.test(result.error.message || '')) failed = true;
        } catch {
          failed = true;
        }
      }
      if (failed) {
        warn('Freebies unsubscribe: cancellation failed.');
        return page('Please try again', '<p>We could not cancel all remaining emails. Please try again or contact alyssa@internalhaven.com.</p>', 503);
      }
      return page('You’re unsubscribed', '<p>You’re unsubscribed, no more emails will be sent.</p><p>An email already sent cannot be recalled.</p>');
    },
  };
}
