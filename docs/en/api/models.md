# Models

`GET /v1/models` — list the models your account can call.

## Request example

```bash
curl https://api.novaapis.com/v1/models \
  -H "Authorization: Bearer $NOVA_API_KEY"
```

## Notes

- The response follows the OpenAI-compatible model list structure.
- Available models, context length, pricing, and limits may change as upstreams adjust.
- For the full model list and pricing, refer to the [model center](https://api.novaapis.com/pricing) on the main site.
