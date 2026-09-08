# Authentication + Database Setup

## Architecture
Frontend -> Auth Provider -> Secure API -> Database -> Gemini

## Recommended production stack
- Supabase Auth
- Supabase Postgres
- Server-side API
- Redis for distributed rate limiting

## Database tables
Run database/schema.sql in your Postgres/Supabase SQL editor.

## Security
The browser must never decide a user's paid tier. The secure server should read the authenticated user and tier from the database before generating prompts.
