import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import { createInquiryServer } from '../server/inquiry-assistant.mjs';

const englishBrief = { dates: 'May', destination: 'athens', guests: 80, details: 'Corporate dinner for about 80 guests.', question: 'Which year are you considering?' };
const greekBrief = { ...englishBrief, dates: 'Μάιος 2027', details: 'Εταιρικό δείπνο για περίπου 80 άτομα.', question: null };

function modelResponse(brief) {
  return Response.json({ status: 'completed', output: [
    { type: 'reasoning' },
    { type: 'message', content: [{ type: 'output_text', text: JSON.stringify(brief) }] },
  ] });
}

async function start(t, fetchImpl, apiKey = 'test-key') {
  const server = createInquiryServer({ fetchImpl, apiKey });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const endpoint = `http://127.0.0.1:${server.address().port}/api/inquiry-assistant`;
  const post = (body, headers = {}) => fetch(endpoint, {
    method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body),
  });
  return { endpoint, post };
}

test('sends a strict, stateless Luna request and returns English and Greek briefs', async (t) => {
  const calls = [];
  const { post } = await start(t, async (url, options) => {
    assert.equal(url, 'https://api.openai.com/v1/responses');
    assert.equal(options.headers.authorization, 'Bearer test-key');
    const payload = JSON.parse(options.body);
    calls.push(payload);
    return modelResponse(calls.length === 1 ? englishBrief : greekBrief);
  });
  const english = await post({ locale: 'en', description: 'Dinner in Athens in May for about 80', name: 'Private Name', email: 'private@example.test' });
  assert.equal(english.status, 200);
  assert.equal(english.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await english.json(), englishBrief);
  const greek = await post({ locale: 'el', description: 'Δείπνο στην Αθήνα τον Μάιο', answer: 'Το 2027, περίπου 80 άτομα' });
  assert.equal(greek.status, 200);
  assert.deepEqual(await greek.json(), greekBrief);
  assert.equal(calls[0].model, 'gpt-6-luna');
  assert.equal(calls[0].store, false);
  assert.equal(calls[0].text.format.strict, true);
  assert.equal(calls[0].text.format.type, 'json_schema');
  assert.doesNotMatch(calls[0].input, /Private Name|private@example/);
  assert.match(calls[1].input, /Το 2027/);
});

test('rejects invalid requests before contacting OpenAI', async (t) => {
  let calls = 0;
  const { post, endpoint } = await start(t, async () => { calls++; });
  assert.equal((await fetch(endpoint)).status, 405);
  assert.equal((await post({ locale: 'es', description: 'Dinner' })).status, 400);
  assert.equal((await post({ locale: 'en', description: ' ' })).status, 400);
  assert.equal((await post(null)).status, 400);
  assert.equal((await post({ locale: 'en', description: 'x'.repeat(20_000) })).status, 413);
  assert.equal((await post({ locale: 'en', description: 'Dinner' }, { origin: 'https://unrelated.example' })).status, 403);
  assert.equal(calls, 0);
});

test('caps upstream calls during a burst', async (t) => {
  let calls = 0;
  const { post } = await start(t, async () => {
    calls++;
    return modelResponse(englishBrief);
  });
  const results = await Promise.all(Array.from({ length: 31 }, () => post({ locale: 'en', description: 'Dinner' })));
  assert.equal(calls, 30);
  const limited = results.filter(({ status }) => status === 429);
  assert.equal(limited.length, 1);
  assert.ok(Number(limited[0].headers.get('retry-after')) > 0);
});

test('returns a safe error for invalid model data, refusals, and missing credentials', async (t) => {
  let call = 0;
  const { post } = await start(t, async () => ++call === 1
    ? modelResponse({ ...englishBrief, guests: -1 })
    : Response.json({ status: 'completed', output: [{ type: 'message', content: [{ type: 'refusal', refusal: 'Private upstream content' }] }] }));
  const input = { locale: 'en', description: 'Dinner' };
  assert.equal((await post(input)).status, 502);
  const refusal = await post(input);
  assert.equal(refusal.status, 502);
  assert.doesNotMatch(await refusal.text(), /Private upstream content/);
  const missing = await start(t, async () => assert.fail('Must not contact OpenAI'), '');
  assert.equal((await missing.post(input)).status, 503);
});
