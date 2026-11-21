import { buildFreebiesEmails } from './freebies-email.mjs';
import { withUnsubscribe } from './freebies-unsubscribe.mjs';

export function createFreebiesHandler({ insert, sendEmail, warn = console.warn, now = () => new Date(), unsubscribeSecret = () => process.env.FREEBIES_UNSUBSCRIBE_SECRET }) {
  return async function POST(request) {
    let input;
    try {
      input = await request.json();
    } catch {
      return Response.json({ success: false, error: 'Please submit valid JSON.' }, { status: 400 });
    }
    const email = typeof input?.email === 'string' ? input.email.trim().toLowerCase() : '';
    const fullName = typeof input?.fullName === 'string' ? input.fullName.trim() : '';
    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(input.email)) {
      return Response.json({ success: false, error: 'Please enter a valid email address' }, { status: 400 });
    }
    if (fullName.length < 2 || fullName.length > 255 || /[\r\n]/.test(fullName)) {
      return Response.json({ success: false, error: 'Please enter your full name' }, { status: 400 });
    }

    const signupAt = now();
    let error;
    try {
      ({ error } = await insert({ full_name: fullName, email, source: 'website_freebies_modal' }));
    } catch {
      warn('Freebies signup: database request failed.');
      return Response.json({ success: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
    const duplicate = error?.code === '23505';
    if (duplicate) {
      return Response.json({ success: false, error: 'This email is already subscribed to our freebies!' });
    }
    if (error && !duplicate) {
      warn('Freebies signup: database insert failed.');
      return Response.json({
        success: false,
        error: error.code === '42501'
          ? 'Database configuration issue. Please try again or contact support.'
          : 'Unable to subscribe. Please try again.',
      }, { status: 500 });
    }

    const messages = buildFreebiesEmails(fullName, email, signupAt);
    const secret = unsubscribeSecret();
    if (!secret) warn('Freebies email: unsubscribe secret missing; unsubscribe links omitted.');
    const scheduledIds = [];
    for (const message of messages.reverse()) {
      try {
        const result = await sendEmail(withUnsubscribe(message, scheduledIds, secret));
        if (result?.error) warn('Freebies email: delivery or scheduling failed.');
        else if (message.scheduledAt && result?.data?.id) scheduledIds.push(result.data.id);
      } catch {
        warn('Freebies email: delivery or scheduling failed.');
      }
    }
    return Response.json({ success: true });
  };
}
