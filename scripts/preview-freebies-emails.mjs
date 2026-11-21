import { buildFreebiesEmails } from '../src/lib/freebies-email.mjs';

const signupAt = new Date();
for (const message of buildFreebiesEmails('Devin Test', 'devin@example.com', signupAt)) {
  const offset = message.scheduledAt
    ? (new Date(message.scheduledAt) - signupAt) / 86400000
    : 0;
  console.log('Subject:', message.subject);
  console.log(`scheduledAt: ${message.scheduledAt || 'immediate'} (signup + ${offset} days)`);
  console.log('Attachments:', JSON.stringify(message.attachments || [], null, 2));
  console.log(message.text);
  console.log('---');
}
