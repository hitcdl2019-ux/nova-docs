# Models

`GET /v1/models` — list the models your account can call.

## Request example

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/models \
  -H "Authorization: Bearer $NOVA_API_KEY"
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novaapis.com/v1")

models = client.models.list()
for m in models.data:
    print(m.id)
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const models = await client.models.list()
for (const m of models.data) console.log(m.id)
```

:::

## Notes

- The response follows the OpenAI-compatible model list structure.
- Available models, context length, pricing, and limits may change as upstreams adjust.
- For the full model list and pricing, refer to the [model center](https://api.novaapis.com/pricing) on the main site.
