# Chat Completions

`POST /v1/chat/completions` — the most common text chat endpoint, compatible with the OpenAI Chat Completions format.

## Request example

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "Describe NovaAPI in one sentence" }
    ]
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novaapis.com/v1")

resp = client.chat.completions.create(
    model="gpt-5.5",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Describe NovaAPI in one sentence"},
    ],
)
print(resp.choices[0].message.content)
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const resp = await client.chat.completions.create({
  model: 'gpt-5.5',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Describe NovaAPI in one sentence' },
  ],
})
console.log(resp.choices[0].message.content)
```

:::

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

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [{ "role": "user", "content": "Tell me a joke" }],
    "stream": true
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="...", base_url="https://api.novaapis.com/v1")

stream = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "Tell me a joke"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices: 
        print(chunk.choices[0].delta.content or "", end="")
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const stream = await client.chat.completions.create({
  model: 'gpt-5.5',
  messages: [{ role: 'user', content: 'Tell me a joke' }],
  stream: true,
})
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '')
}
```

:::
