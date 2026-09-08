# Razorpay Setup

Use test mode first.

Required server environment variables:
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET
- RAZORPAY_WEBHOOK_SECRET

Secure flow:
1. Authenticated user selects Pro or Ultimate.
2. Backend creates Razorpay order.
3. Frontend opens checkout.
4. Backend verifies payment signature.
5. A verified webhook activates the subscription.
