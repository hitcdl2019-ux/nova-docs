# Hermes

Hermes is OpenAI-compatible. Point its model endpoint (`base_url`) at NovaAPI and swap the key for a NovaAPI Key.

## Set environment variables

```bash
export OPENAI_BASE_URL="https://api.novaapis.com/v1"
export OPENAI_API_KEY="sk-your-NovaAPI-key"
```

## Notes

- Endpoint: `https://api.novaapis.com/v1` (OpenAI-compatible)
- Key: use the Key generated in the NovaAPI console
- Model: pick a tool-calling model; see the [model list](/en/api/models)

> If Hermes uses a standalone config file, set its `base_url` / `api_base` field to the address above — the mechanism is the same.
