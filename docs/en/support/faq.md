# FAQ

## How is NovaAPI different from using OpenAI directly?

NovaAPI aggregates 40+ upstream providers behind a single OpenAI-compatible API. One key calls many models, with unified metering, billing, failover, and rate limiting.

## How do I switch models?

Just change the `model` field in your request — the rest of your code stays the same. See [Models](/en/api/models) for what's available.

## Is streaming supported?

Yes. Set `"stream": true` in your request — see [Chat Completions](/en/api/chat).

## Can I get a refund on my balance?

Due to the nature of API services, balance is generally non-refundable after a successful top-up, but it can be used permanently for any service on the platform. See the Service Agreement for details.

## How do I troubleshoot call errors?

Check the returned HTTP status code and error message against [Error Codes](/en/support/errors). Common ones are invalid key (401) and rate limiting (429).

## Still stuck?

See [Contact Us](/en/support/contact).
