# Lead Scout

Nuxt 3 (TS, pnpm) app with built-in backend. Searches Google via Puppeteer, filters links via AI, crawls sites and extracts contacts.

## Requirements

- Node 20.10+ (рекомендуется 20.11.1)
- pnpm 9+

## Setup

1. Install deps:

```bash
# если используете nvm
nvm install 20.11.1 && nvm use 20.11.1
pnpm i
```

2. Create `.env` and set:

```
# Use ProxyAPI key (preferred)
PROXYAPI_API_KEY=sk-...
PROXYAPI_BASE_URL=https://api.proxyapi.ru/openai/v1

# Or fallback to direct OpenAI key if needed
# OPENAI_API_KEY=sk-...
GOOGLE_SEARCH_UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"

# Visible Chrome window and step speed
# false = show Chrome window, true = headless
PUPPETEER_HEADLESS=false
# Slow down actions in ms to observe clicks/navigation
PUPPETEER_SLOWMO=200
# Open DevTools automatically
PUPPETEER_DEVTOOLS=true
```

3. Dev:

```bash
pnpm dev
```

Open http://localhost:3000 and run a query.

## Notes

- Puppeteer downloads Chromium by default; ensure environment allows headless Chrome.
- For production, consider rotating proxies and anti-bot measures.
- Ошибка `getDefaultHighWaterMark` означает версию Node < 20.10 — переключитесь на Node 20.11.1.


