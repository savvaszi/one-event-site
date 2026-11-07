import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import { createInquiryServer } from '../server/inquiry-assistant.mjs';

const index = [
  { locale: 'en', path: '/', title: 'One Event', heading: 'Corporate events', text: 'We plan corporate events across Greece and Cyprus.' },
  { locale: 'el', path: '/el/', title: 'One Event', heading: 'Εταιρικές εκδηλώσεις', text: 'Σχεδιάζουμε εταιρικές εκδηλώσεις στην Ελλάδα και την Κύπρο.' },
  { locale: 'es', path: '/es/', title: 'One Event', heading: 'Eventos corporativos', text: 'Organizamos eventos corporativos en Grecia y Chipre.' },
];

test('chat only returns exact passages and links from the requested language', async (t) => {
  const server = createInquiryServer({
    apiKey: 'mock-key',
    siteIndex: index,
    fetchImpl: async (_, { body }) => {
      const payload = JSON.parse(body);
      const { locale, passages, question } = JSON.parse(payload.input);
      assert.equal(payload.store, false);
      assert.equal(passages.length, 1);
      assert.equal(passages[0].text, index.find((page) => page.locale === locale).text);
      return Response.json({
        status: 'completed',
        output: [{ type: 'message', content: [{ type: 'output_text', text: JSON.stringify({
          ids: question.includes('invent') ? [999] : [1],
          text: 'Fabricated claim',
        }) }] }],
      });
    },
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const post = (locale, question) => fetch(`http://127.0.0.1:${server.address().port}/api/site-chat`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ locale, question }),
  });

  for (const [i, question] of ['Corporate events?', 'Εταιρικές εκδηλώσεις;', '¿Eventos corporativos?'].entries()) {
    const { locale, text, path, title } = index[i];
    const response = await post(locale, question);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { passages: [{ text, path, title }] });
  }
  assert.deepEqual(await (await post('en', 'invent corporate events')).json(), { passages: [] });
  assert.deepEqual(await (await post('en', 'Weather tomorrow?')).json(), { passages: [] });
  assert.equal((await post('fr', 'Corporate events?')).status, 400);
});
