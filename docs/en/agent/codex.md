# Codex

[Codex](https://github.com/openai/codex) is OpenAI's official command-line coding agent. Define a custom model provider in its config file to route requests to NovaAPI.

## 1. Install

```bash
npm install -g @openai/codex
```

## 2. Edit `~/.codex/config.toml`

```toml
model = "gpt-5"
model_provider = "novaapi"

[model_providers.novaapi]
name = "NovaAPI"
base_url = "https://api.novaapis.com/v1"
env_key = "NOVA_API_KEY"
wire_api = "chat"
```

- `base_url`: NovaAPI's OpenAI-compatible endpoint
- `env_key`: which environment variable holds the key
- `wire_api = "chat"`: use the `/chat/completions` API (required for third-party compatible endpoints)

## 3. Set the key and run

```bash
export NOVA_API_KEY="sk-your-NovaAPI-key"
codex
```

> Change `model` to any tool-calling model from the [model list](/en/api/models).
