import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildFreebiesEmails, sendFreebiesEmail } from '../src/lib/freebies-email.mjs';
import { createFreebiesHandler } from '../src/lib/freebies-signup.mjs';

const signup = { fullName: ' Devin Test ', email: ' DEVIN@example.com ' };
const signupAt = new Date('2026-11-21T12:00:00.000Z');
const request = (input) => new Request('http://localhost/api/freebies', {
  method: 'POST', body: JSON.stringify(input),
});

function setup({ insertError = null, insertThrows = false, sendError = false, sendThrows = false } = {}) {
  const inserted = [], sent = [], warnings = [];
  const handler = createFreebiesHandler({
    now: () => signupAt,
    insert: async (data) => {
      inserted.push(data);
      if (insertThrows) throw new Error('Private database details');
      return { error: insertError };
    },
    sendEmail: async (message) => {
      sent.push(message);
      if (sendThrows) throw new Error('Private provider details');
      return { error: sendError ? { message: 'Private provider details' } : null };
    },
    warn: (message) => warnings.push(message),
  });
  return { handler, inserted, sent, warnings };
}

test('normalizes signup, inserts fixed fields and sends only to submitted address', async () => {
  const { handler, inserted, sent } = setup();
  const response = await handler(request({ ...signup, to: 'other@example.com', subject: 'Ignore me' }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.deepEqual(inserted, [{ full_name: 'Devin Test', email: 'devin@example.com', source: 'website_freebies_modal' }]);
  assert.deepEqual(sent[0].to, ['devin@example.com']);
  assert.notEqual(sent[0].subject, 'Ignore me');
  assert.equal(sent.length, 3);
  assert.equal(sent[0].scheduledAt, undefined);
  assert.equal(sent[1].scheduledAt, '2026-11-28T12:00:00.000Z');
  assert.equal(sent[2].scheduledAt, '2026-12-05T12:00:00.000Z');
});

test('rejects empty, malformed, oversized and invalid input before any side effects', async () => {
  for (const input of [null, {}, { ...signup, email: 'bad' }, { ...signup, email: 1 },
    { ...signup, fullName: '' }, { ...signup, fullName: 'a' },
    { ...signup, fullName: 'x'.repeat(256) }, { ...signup, email: `${'a'.repeat(256)}@a.com` },
    { ...signup, email: 'a@b.com\r\n' }, { ...signup, fullName: 'Devin\nTest' }]) {
    const { handler, inserted, sent } = setup();
    assert.equal((await handler(request(input))).status, 400);
    assert.equal(inserted.length + sent.length, 0);
  }
  const { handler } = setup();
  assert.equal((await handler(new Request('http://localhost', { method: 'POST', body: '{' }))).status, 400);
});

test('duplicate sends nothing and keeps the existing user-facing error', async () => {
  const { handler, sent } = setup({ insertError: { code: '23505' } });
  assert.deepEqual(await (await handler(request(signup))).json(), {
    success: false, error: 'This email is already subscribed to our freebies!',
  });
  assert.equal(sent.length, 0);
});

test('database errors do not send email or log private details', async () => {
  for (const options of [{ insertError: { code: '42501' } }, { insertError: { code: 'other' } }, { insertThrows: true }]) {
    const { handler, sent, warnings } = setup(options);
    assert.equal((await handler(request(signup))).status, 500);
    assert.equal(sent.length, 0);
    assert.equal(warnings.length, 1);
    assert.doesNotMatch(warnings[0], /Devin|example.com|Private/);
  }
});

test('Resend errors and exceptions do not fail a successful signup', async () => {
  for (const options of [{ sendError: true }, { sendThrows: true }]) {
    const { handler, warnings, sent } = setup(options);
    assert.deepEqual(await (await handler(request(signup))).json(), { success: true });
    assert.equal(sent.length, 3);
    assert.deepEqual(warnings, Array(3).fill('Freebies email: delivery or scheduling failed.'));
  }
});

test('missing Resend key logs only a static warning and signup succeeds', async (t) => {
  const original = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  t.after(() => {
    if (original === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = original;
  });
  const warnings = [];
  t.mock.method(console, 'warn', (message) => warnings.push(message));
  const handler = createFreebiesHandler({ insert: async () => ({ error: null }), sendEmail: sendFreebiesEmail });
  assert.deepEqual(await (await handler(request(signup))).json(), { success: true });
  assert.deepEqual(warnings, Array(3).fill('Freebies email: RESEND_API_KEY missing; delivery skipped.'));
});

test('templates escape HTML names, attach the fixed PDFs and include CTA and privacy', () => {
  const messages = buildFreebiesEmails('<Devin&\"\'> Test', 'devin@example.com', signupAt);
  assert.equal(messages.length, 3);
  assert.deepEqual(messages[0].attachments.map(({ filename }) => filename), ['Intro to Life Coaching Workbook.pdf']);
  assert.deepEqual(messages[1].attachments.map(({ filename }) => filename), [
    'How to Be Your Own Bestie!.pdf', 'Tips to Cultivate a Growth Mindset.pdf', 'Emotion Self-Regulation Technique.pdf',
  ]);
  assert.equal(messages[2].attachments, undefined);
  for (const message of messages) {
    assert.ok(message.html.includes('&lt;Devin&amp;&quot;&#39;&gt;'));
    for (const attachment of message.attachments || []) {
      assert.equal(decodeURIComponent(new URL(attachment.path).pathname), `/tools/${attachment.filename}`);
    }
    assert.match(message.text, /https:\/\/calendly.com\/alyssarey9\/60min/);
    assert.match(message.html, /Book your free clarity call<\/a>/);
    assert.match(message.text, /https:\/\/www.internalhaven.com\/privacy/);
    assert.match(message.text, /Reply to this email/);
  }
  assert.match(buildFreebiesEmails('', 'devin@example.com')[0].text, /^Hi friend,/);
});
