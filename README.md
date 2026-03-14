# latency-toy

A minimal open-source toy CLI that checks endpoint availability and latency.

## Why this toy

- Tiny and easy to audit.
- Useful for release smoke checks.
- Zero runtime dependencies.

## Quick start

```bash
npm install
node src/cli.js https://example.com
node src/cli.js https://example.com --json
```

## Run tests

```bash
npm test
```

## Example output

```text
UP url=https://example.com status=200 latency_ms=84.12 error=null
```

## GitHub publishing checklist

1. Create a new GitHub repository named `latency-toy`.
2. Set remote:
   `git remote add origin git@github.com:<org-or-user>/latency-toy.git`
3. Push:
   `git push -u origin main`
4. Verify README rendering and license detection.

## License

MIT
