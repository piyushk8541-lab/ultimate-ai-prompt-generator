# Production Upgrade Path

## Current local prototype
The current UI supports tier selection and local usage counting for development.

## Before public launch
Replace localStorage-based authentication and usage with:
- Supabase Auth or Firebase Auth
- Postgres database for daily usage records
- Server-side rate limiting (Upstash Redis recommended)
- Payment gateway webhook verification
- Subscription status stored server-side

## Required security rules
- Never expose GEMINI_API_KEY in frontend code.
- Call Gemini only from a server-side API route.
- Verify subscription payments with signed webhooks.
- Enforce usage limits on the server, not only in the browser.
