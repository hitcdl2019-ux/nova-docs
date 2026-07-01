# Hermes

[Hermes](https://github.com/nousresearch/hermes-agent) is OpenAI-compatible. Point its model endpoint (`base_url`) at NovaAPI and swap the key for a NovaAPI Key.

## 1. Install

Follow the official repository at <https://github.com/nousresearch/hermes-agent> for installation.

> 📌 Install commands to be filled in: the environment used to author these docs has no network access to fetch this repo, so the per-OS (Windows / macOS / Linux) install steps will be completed from the official README.

## 2. Point it at NovaAPI

Hermes uses the OpenAI protocol — set the endpoint and key via environment variables.

### macOS / Linux (bash / zsh)

```bash
export OPENAI_BASE_URL="https://api.novaapis.com/v1"
export OPENAI_API_KEY="sk-your-NovaAPI-key"
```

Persist by adding to `~/.zshrc` or `~/.bashrc`.

### Windows PowerShell

```powershell
setx OPENAI_BASE_URL "https://api.novaapis.com/v1"     # persistent, reopen terminal
setx OPENAI_API_KEY "sk-your-NovaAPI-key"

$env:OPENAI_BASE_URL="https://api.novaapis.com/v1"     # current session only
$env:OPENAI_API_KEY="sk-your-NovaAPI-key"
```

## Notes

- Endpoint: `https://api.novaapis.com/v1` (OpenAI-compatible)
- Key: use the Key generated in the NovaAPI console
- Model: pick a tool-calling model; see the [model list](/en/api/models)

> If Hermes uses a standalone config file, set its `base_url` / `api_base` field to the address above — the mechanism is the same.
