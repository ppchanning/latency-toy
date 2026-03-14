import test from 'node:test';
import assert from 'node:assert/strict';
import { checkUrl } from '../src/core.js';

test('checkUrl returns expected shape on invalid host', async () => {
  const result = await checkUrl('http://invalid.localhost', 300);
  assert.equal(typeof result.url, 'string');
  assert.equal(typeof result.ok, 'boolean');
  assert.equal(result.statusCode, null);
  assert.equal(typeof result.latencyMs, 'number');
  assert.equal(typeof result.error, 'string');
});
