# Get Started

Make your first API call in minutes.

## 1. Register and get an API Key

Go to the [NovaAPI main site](https://api.novaapis.com/), sign up, and create an API Key in the console.

## 2. Authentication

Every request must carry your key in the header:

```http
Authorization: Bearer YOUR_API_KEY
```

Security tips:

- Never hardcode keys in frontend code or public repos
- Inject via environment variables, e.g. `NOVA_API_KEY`
- If a key leaks, disable and regenerate it in the console immediately
- Use separate keys per purpose to track usage and limits

## 3. Make your first call

NovaAPI exposes OpenAI-compatible endpoints — just point `base_url` at NovaAPI:

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [
      { "role": "user", "content": "Hello, introduce yourself" }
    ]
  }'
```

## 4. Use an official SDK

Any OpenAI-compatible SDK works — just swap the `base_url`:

```python
from openai import OpenAI

client = OpenAI(
    api_key="your NovaAPI Key",
    base_url="https://api.novaapis.com/v1",
)

resp = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "Hello"}],
)
print(resp.choices[0].message.content)
```

## Next steps

- Browse [API Usage](/en/api/overview) for all endpoints
- See [Agent & Tools](/en/agent/overview) for function calling
