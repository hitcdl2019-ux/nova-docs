# Chat Completions

`POST /v1/chat/completions` — the most common text chat endpoint, compatible with the OpenAI Chat Completions format.

## Request example

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "Describe NovaAPI in one sentence" }
    ]
  }'
```

## Common parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `model` | string | Model name, see [Models](/en/api/models) |
| `messages` | array | Array of conversation messages |
| `stream` | boolean | Stream the response, defaults to `false` |
| `temperature` | number | Sampling temperature, 0–2 |
| `max_tokens` | number | Max tokens to generate |

## Streaming

Set `"stream": true` and the server pushes content in chunks via SSE:

```python
from openai import OpenAI

client = OpenAI(api_key="...", base_url="https://api.novaapis.com/v1")

stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Tell me a joke"}],
    stream=True,
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")
```
