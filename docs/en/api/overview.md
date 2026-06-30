# API Overview

NovaAPI provides OpenAI-compatible RESTful endpoints. Point `base_url` at NovaAPI to call 40+ upstream models.

## Base URL

```
https://api.novaapis.com/v1
```

## Common endpoints

| Endpoint | Description |
| --- | --- |
| `POST /v1/chat/completions` | Chat completions (mainstream text models) |
| `POST /v1/images/generations` | Image generation |
| `GET  /v1/models` | List available models |

## Authentication

Every request needs your key in the header — see [Get Started](/en/start/quickstart):

```http
Authorization: Bearer YOUR_API_KEY
```

## Endpoint docs

- [Chat Completions](/en/api/chat)
- [Image Generation](/en/api/images)
- [Models](/en/api/models)
