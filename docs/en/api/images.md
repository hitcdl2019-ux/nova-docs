# Image Generation

`POST /v1/images/generations` — generate images from text, compatible with the OpenAI Images format.

## Request example

```bash
curl https://api.novaapis.com/v1/images/generations \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dall-e-3",
    "prompt": "A cat drinking coffee on the moon, cyberpunk style",
    "n": 1,
    "size": "1024x1024"
  }'
```

## Common parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `model` | string | Image model name |
| `prompt` | string | Text prompt describing the image |
| `n` | number | Number of images to generate |
| `size` | string | Size, e.g. `1024x1024` |

> Available image models and supported sizes follow [Models](/en/api/models) and the main site's model center.
