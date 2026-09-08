# UAPG Secure Server

## Run
1. npm install
2. Copy .env.example to .env
3. Add GEMINI_API_KEY
4. npm run dev

## Current protections
- API key stays server-side
- Global rate limiting: 30 requests/minute per IP
- Server-side daily prompt limit by user ID and tier

## Production requirement
The current in-memory usage store resets when the server restarts. Replace it with a database/Redis before public launch. Subscription tier must also come from verified server-side payment data.
