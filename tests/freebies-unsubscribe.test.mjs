import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createUnsubscribeToken, verifyUnsubscribeToken, createUnsubscribeHandlers } from '../src/lib/freebies-unsubscribe.mjs';
import { createFreebiesHandler } from '../src/lib/freebies-signup.mjs';

const secret = 'test-secret';
const ids = ['11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222222'];
const request = (token, method = 'GET', body) => new Request(`https://www.internalhaven.com/api/freebies/unsubscribe?t=${token}`, { method, body });

test('signed tokens round trip, support no ids, reject tampering and invalid payloads', () => {
  assert.deepEqual(verifyUnsubscribeToken(createUnsubscribeToken(ids, secret), secret), ids);
  assert.deepEqual(verifyUnsubscribeToken(createUnsubscribeToken([], secret), secret), []);
  for (const token of [null, '', 'broken', createUnsubscribeToken(ids, secret) + 'x', createUnsubscribeToken(['not-an-id'], secret)]) {
    assert.equal(verifyUnsubscribeToken(token, secret), null);
  }
  assert.equal(verifyUnsubscribeToken(createUnsubscribeToken(ids, secret), 'wrong'), null);
  assert.equal(verifyUnsubscribeToken(createUnsubscribeToken(ids, secret), ''), null);
});

test('GET confirms without cancelling; form and one-click POST cancel the right ids', async () => {
  const cancelled = [];
  const handlers = createUnsubscribeHandlers({ secret: () => secret, cancel: async (id) => { cancelled.push(id); return {}; } });
  const token = createUnsubscribeToken(ids, secret);
  const confirmation = await handlers.GET(request(token));
  assert.equal(confirmation.status, 200);
  assert.match(await confirmation.text(), /<button[^>]*.*>Unsubscribe<\/button>/);
  assert.deepEqual(cancelled, []);
  for (const body of [undefined, 'List-Unsubscribe=One-Click']) {
    assert.equal((await handlers.POST(request(token, 'POST', body))).status, 200);
  }
  assert.deepEqual(cancelled, [...ids, ...ids]);
  for (const method of ['GET', 'POST']) assert.equal((await handlers[method](request(token + 'x', method))).status, 400);
});

test('already sent/cancelled errors succeed; other failures remain retryable and PII-free', async () => {
  for (const message of ['Email already sent', 'Email already cancelled']) {
    const handlers = createUnsubscribeHandlers({ secret: () => secret, cancel: async () => ({ error: { message } }) });
    assert.equal((await handlers.POST(request(createUnsubscribeToken(ids, secret), 'POST'))).status, 200);
  }
  const warnings = [];
  const handlers = createUnsubscribeHandlers({ secret: () => secret, cancel: async () => { throw new Error('private'); }, warn: (value) => warnings.push(value) });
  assert.equal((await handlers.POST(request(createUnsubscribeToken(ids, secret), 'POST'))).status, 503);
  assert.deepEqual(warnings, ['Freebies unsubscribe: cancellation failed.']);
});

test('reverse scheduling embeds only the remaining scheduled ids in each link', async () => {
  const sent = [];
  const handler = createFreebiesHandler({
    insert: async () => ({ error: null }), unsubscribeSecret: () => secret,
    sendEmail: async (message) => { sent.push(message); return { data: { id: ids[sent.length - 1] } }; },
  });
  const signup = () => new Request('https://example.com', { method: 'POST', body: JSON.stringify({ fullName: 'Devin Test', email: 'devin@example.com' }) });
  assert.deepEqual(await (await handler(signup())).json(), { success: true });
  for (const [index, message] of sent.entries()) {
    const url = message.headers['List-Unsubscribe'].slice(1, -1);
    assert.deepEqual(verifyUnsubscribeToken(new URL(url).searchParams.get('t'), secret), ids.slice(0, index));
    assert.equal(message.headers['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click');
    assert.ok(message.text.includes(url));
    assert.ok(message.html.includes(url));
  }
  assert.ok(sent[0].scheduledAt > sent[1].scheduledAt);
  assert.equal(sent[2].scheduledAt, undefined);
});

test('missing secret omits links and headers but still sends the series', async () => {
  const sent = [], warnings = [];
  const handler = createFreebiesHandler({
    insert: async () => ({ error: null }), unsubscribeSecret: () => undefined,
    sendEmail: async (message) => { sent.push(message); }, warn: (value) => warnings.push(value),
  });
  await handler(new Request('https://example.com', { method: 'POST', body: JSON.stringify({ fullName: 'Devin Test', email: 'devin@example.com' }) }));
  assert.equal(sent.length, 3);
  for (const message of sent) {
    assert.equal(message.headers, undefined);
    assert.doesNotMatch(message.html + message.text, /Unsubscribe|Reply to this email/);
  }
  assert.deepEqual(warnings, ['Freebies email: unsubscribe secret missing; unsubscribe links omitted.']);
});
