import { buildFreebiesEmails } from '../src/lib/freebies-email.mjs';
import { withUnsubscribe } from '../src/lib/freebies-unsubscribe.mjs';

const signupAt = new Date();
const ids = ['11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222222'];
for (const [index, original] of buildFreebiesEmails('Devin Test', 'devin@example.com', signupAt).entries()) {
  const message = withUnsubscribe(original, ids.slice(index), process.env.FREEBIES_UNSUBSCRIBE_SECRET || 'preview-only-secret');
  const offset = message.scheduledAt
    ? (new Date(message.scheduledAt) - signupAt) / 86400000
    : 0;
  console.log('Subject:', message.subject);
  console.log(`scheduledAt: ${message.scheduledAt || 'immediate'} (signup + ${offset} days)`);
  console.log('Attachments:', JSON.stringify(message.attachments || [], null, 2));
  console.log(message.text);
  console.log('---');
}
