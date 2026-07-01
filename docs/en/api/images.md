# Image Generation

`POST /v1/images/generations` — generate images from text, compatible with the OpenAI Images format.

## Request example

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/images/generations \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "A cat drinking coffee on the moon, cyberpunk style",
    "n": 1,
    "size": "1024x1024"
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novaapis.com/v1")

resp = client.images.generate(
    model="gpt-image-2",
    prompt="A cat drinking coffee on the moon, cyberpunk style",
    n=1,
    size="1024x1024",
)
print(resp.data[0].url)
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const resp = await client.images.generate({
  model: 'gpt-image-2',
  prompt: 'A cat drinking coffee on the moon, cyberpunk style',
  n: 1,
  size: '1024x1024',
})
console.log(resp.data[0].url)
```

:::

## Common parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `model` | string | Image model name |
| `prompt` | string | Text prompt describing the image |
| `n` | number | Number of images to generate |
| `size` | string | Size, e.g. `1024x1024` |

> Available image models and supported sizes follow [Models](/en/api/models) and the main site's model center.
