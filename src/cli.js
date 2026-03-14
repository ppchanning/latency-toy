#!/usr/bin/env node
import { checkUrl } from './core.js';

function parseArgs(argv) {
  const args = { timeoutMs: 5000, json: false, url: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--timeout' && argv[i + 1]) {
      args.timeoutMs = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (!args.url) {
      args.url = token;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  if (!args.url) {
    console.error('Usage: latency-toy <url> [--timeout <ms>] [--json]');
    process.exit(2);
  }

  const result = await checkUrl(args.url, args.timeoutMs);
  if (args.json) {
    console.log(JSON.stringify(result));
  } else {
    const state = result.ok ? 'UP' : 'DOWN';
    console.log(
      `${state} url=${result.url} status=${result.statusCode} latency_ms=${result.latencyMs} error=${result.error}`
    );
  }

  process.exit(result.ok ? 0 : 1);
}

main();
