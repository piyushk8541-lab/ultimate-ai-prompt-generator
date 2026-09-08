# Subscription Payment Integration

Plans:
- Pro: ₹299/month, 25 prompts/day
- Ultimate: ₹499/month, 50 prompts/day

## Secure flow
1. Authenticated user selects plan.
2. Backend creates checkout/order with payment gateway.
3. Gateway collects payment.
4. Gateway sends webhook to backend.
5. Backend verifies webhook signature.
6. Backend updates profiles.tier and subscription_status.
7. Usage limits immediately use the database tier.

## Never trust
- Frontend payment success messages
- Plan/tier sent by browser
- Unverified webhook payloads

A real gateway adapter and merchant credentials are still required before live payments can work.
