export async function checkUrl(url, timeoutMs = 5000) {
  const startedAt = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { method: 'GET', signal: controller.signal });
    const latencyMs = Number((performance.now() - startedAt).toFixed(2));
    return {
      url,
      ok: response.ok,
      statusCode: response.status,
      latencyMs,
      error: null
    };
  } catch (error) {
    const latencyMs = Number((performance.now() - startedAt).toFixed(2));
    return {
      url,
      ok: false,
      statusCode: null,
      latencyMs,
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    clearTimeout(timer);
  }
}
