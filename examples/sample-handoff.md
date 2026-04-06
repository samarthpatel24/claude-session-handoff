# Session Handoff — April 6, 2026

**Project:** GYCO / gyco-microservice
**Branch:** `fix/webhook-duplicates`
**Summary:** Fixed duplicate webhook processing by adding Redis-based idempotency checks

## Work Completed
- Added idempotency key check in `src/webhooks/payment_handler.py` before processing any event
- Created `src/services/redis_cache.py` — thin wrapper around Redis GET/SETEX
- Updated webhook error responses: return 200 on duplicate instead of 500 (prevents Stripe retry loops)
- Added 3 unit tests in `tests/test_payment_handler.py` covering: new event, duplicate event, expired key

## Key Decisions
- **Redis over PostgreSQL for idempotency keys**: TTL-based expiry is simpler, no migration needed, and webhook replay window is 24h max
- **Return 200 on duplicate**: Stripe retries on non-2xx responses, so 500 was causing infinite retry loops in production

## Files Changed
- `src/webhooks/payment_handler.py` — added idempotency check at top of `handle_payment_event()`
- `src/services/redis_cache.py` — new file, ~40 lines
- `tests/test_payment_handler.py` — 3 new test cases added

## Current State
- All tests pass locally (`pytest` — 47 passed, 0 failed)
- Branch pushed to remote, no PR created yet
- Redis is already in the docker-compose stack — no infra changes needed

## Blockers / Open Questions
- Need to verify Redis TTL value (currently 24h) against actual Stripe webhook retry window — check Stripe docs
- Should duplicate webhook attempts be logged/monitored? Could be useful for alerting

## Next Steps
1. Create PR for `fix/webhook-duplicates` → tag for review
2. Deploy to devqa and test with Stripe test webhooks (`stripe trigger payment_intent.succeeded`)
3. Decide on monitoring for duplicate webhook rate

## Context for Next Session
- Working in the `fix/webhook-duplicates` branch
- Redis connection config is in `.env.local` under key `REDIS_URL` (not `.env`)
- Webhook endpoint is `/api/v1/webhooks/stripe`, registered in `src/routes/webhooks.py:L23`
- Stripe test mode keys are in 1Password under "GYCO Dev"
