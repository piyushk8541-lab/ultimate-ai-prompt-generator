# Supabase Integration

## Added
- Supabase client
- Email/password sign up
- Email/password sign in
- Sign out/current user helpers

## Setup
1. Create a Supabase project.
2. Enable Email authentication.
3. Run database/schema.sql in the Supabase SQL Editor.
4. Copy .env.supabase.example to your local environment file.
5. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

## Important
The Supabase anon key may be used in the frontend when Row Level Security is configured correctly. Never expose service_role keys or Gemini API keys in frontend code.
