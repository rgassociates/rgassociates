# Rate Limiting Implementation

This document describes the rate limiting implementation using Upstash Redis for the RG Associates website.

## Overview

Rate limiting has been implemented to protect form submissions from spam and abuse. The implementation uses Upstash Redis with the `@upstash/ratelimit` library to track and limit requests based on IP addresses.

## Configuration

### Environment Variables

Add the following to your `.env.local` file:

```bash
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

Get these credentials from [Upstash Console](https://console.upstash.com/).

### Rate Limit Rules

The following rate limiters are configured:

1. **Form Submission Limiter** (`formSubmissionLimiter`)
   - **Limit**: 3 submissions per 10 minutes per IP
   - **Used by**: Hero form (`/src/app/actions/heroForm.ts`)
   - **Purpose**: Prevent spam on quick consultation requests

2. **Contact Form Limiter** (`contactFormLimiter`)
   - **Limit**: 2 submissions per 15 minutes per IP
   - **Used by**: Contact page form (`/src/app/contact/actions.ts`)
   - **Purpose**: More restrictive limit for detailed contact submissions

3. **API Limiter** (`apiLimiter`)
   - **Limit**: 10 requests per minute per IP
   - **Purpose**: General API endpoint protection (ready for future use)

## Implementation Details

### Core Files

1. **`/src/lib/rateLimit.ts`**
   - Contains rate limiter instances
   - Helper functions for IP extraction and rate limit checking
   - Error handling with fail-open strategy

2. **`/src/app/actions/heroForm.ts`**
   - Hero form submission with rate limiting
   - Uses `formSubmissionLimiter`

3. **`/src/app/contact/actions.ts`**
   - Contact form submission with rate limiting
   - Uses `contactFormLimiter`

### How It Works

1. **IP Extraction**: The `getClientIP()` function extracts the client's IP address from request headers, supporting various hosting providers (Vercel, Cloudflare, etc.)

2. **Rate Limit Check**: Before processing any form submission, the `checkRateLimit()` function is called with the client's IP and the appropriate rate limiter.

3. **Response Handling**:
   - If rate limit is **not exceeded**: Form processing continues normally
   - If rate limit is **exceeded**: Returns an error message with the time until reset
   - If rate limiting **service fails**: Fails open (allows the request) to prevent blocking legitimate users

### Error Handling

The implementation uses a **fail-open** strategy:
- If Upstash Redis is unavailable, requests are allowed through
- Errors are logged but don't block legitimate users
- In production, you can change to **fail-closed** by modifying the error handler in `checkRateLimit()`

## User Experience

When a user exceeds the rate limit, they receive a friendly error message:

```
Rate limit exceeded. Please try again in X minute(s).
```

The message dynamically calculates the remaining time until they can submit again.

## Monitoring

Rate limit events are logged using the application's logger:

```typescript
logger.warn('[Hero Form] Rate limit exceeded:', { ip: clientIP });
```

You can monitor these logs to:
- Identify potential abuse patterns
- Adjust rate limits if needed
- Track legitimate users hitting limits

## Customization

### Adjusting Rate Limits

To modify rate limits, edit `/src/lib/rateLimit.ts`:

```typescript
export const formSubmissionLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "10 m"), // Change these values
    analytics: true,
    prefix: "@rg-legal/form-submission",
});
```

Available time units:
- `"ms"` - milliseconds
- `"s"` - seconds
- `"m"` - minutes
- `"h"` - hours
- `"d"` - days

### Adding Rate Limiting to New Endpoints

1. Import the necessary functions:
```typescript
import { apiLimiter, getClientIP, checkRateLimit } from '@/lib/rateLimit';
import { headers } from 'next/headers';
```

2. Add rate limit check:
```typescript
const headersList = await headers();
const clientIP = getClientIP(headersList);
const rateLimitResult = await checkRateLimit(clientIP, apiLimiter);

if (!rateLimitResult.success) {
    return { error: rateLimitResult.error };
}
```

## Testing

### Local Testing

1. Ensure Upstash credentials are in `.env.local`
2. Submit forms multiple times quickly
3. Verify rate limit error appears after exceeding limits
4. Wait for the reset period and verify submissions work again

### Production Testing

1. Monitor logs for rate limit events
2. Test from different IPs to ensure limits are per-IP
3. Verify fail-open behavior if Upstash is temporarily unavailable

## Security Considerations

1. **IP Spoofing**: The implementation trusts proxy headers (`x-forwarded-for`, etc.). Ensure your hosting provider properly sets these headers.

2. **Distributed Attacks**: Rate limiting is per-IP. Distributed attacks from multiple IPs may still succeed. Consider adding additional protection layers (CAPTCHA, honeypots).

3. **Privacy**: IP addresses are used for rate limiting but not stored permanently. They exist only in Redis with TTL.

4. **Fail-Open vs Fail-Closed**: Currently set to fail-open. For maximum security, change to fail-closed in production.

## Dependencies

- `@upstash/ratelimit`: ^2.0.0
- `@upstash/redis`: ^1.28.0

## Resources

- [Upstash Documentation](https://upstash.com/docs/redis/overall/getstarted)
- [Upstash Rate Limiting](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

## Troubleshooting

### Rate Limiting Not Working

1. Verify environment variables are set correctly
2. Check Upstash Redis dashboard for connection issues
3. Review application logs for rate limiting errors
4. Ensure `headers()` is being called correctly in server actions

### Users Reporting False Positives

1. Check if multiple users share the same IP (corporate networks, VPNs)
2. Consider adjusting rate limits
3. Review logs to identify patterns
4. Consider implementing user-based rate limiting (requires authentication)

### Upstash Connection Issues

1. Verify credentials in `.env.local`
2. Check Upstash dashboard for service status
3. Review network/firewall settings
4. Ensure your hosting provider allows external Redis connections
