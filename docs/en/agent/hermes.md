# Hermes

[Hermes](https://github.com/nousresearch/hermes-agent) (Hermes Agent by Nous Research) is OpenAI-compatible. Add NovaAPI as a custom endpoint and swap the key for a NovaAPI Key. This guide starts from scratch and covers Windows / macOS / Linux.

## Requirements

- OS: Windows 10+ (PowerShell) / macOS / Linux (WSL2 also works)
- An API Key from the NovaAPI console (starts with `sk-`)

> No manual Node.js/Python setup needed — the Hermes installer bundles its own runtime (uv, Python 3.11, Node.js, ripgrep, ffmpeg). Install only what you're missing.

---

## 1. Install Hermes

The official installer detects your platform and pulls the runtime it needs.

### macOS / Linux / WSL2

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

After it finishes, reload your shell so `hermes` is on PATH:

```bash
source ~/.bashrc      # or: source ~/.zshrc
```

### Windows (PowerShell)

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

Reopen the terminal afterward.

Verify:

```bash
hermes --version
```

---

## 2. Point it at NovaAPI

NovaAPI is an OpenAI-compatible endpoint. Two ways to configure it.

### Option A — interactive (recommended)

```bash
hermes model
```

Choose **"Custom endpoint (self-hosted / VLLM / etc.)"**, then enter:

- API base URL: `https://api.novaapis.com/v1`
- API key: your `sk-...` NovaAPI key
- Model name: any tool-calling model from the [model list](/en/api/models)

Your choice is saved to `~/.hermes/config.yaml`.

### Option B — edit the config manually

Add NovaAPI as a named custom provider in `~/.hermes/config.yaml`, and put the key in `~/.hermes/.env`:

```yaml
# ~/.hermes/config.yaml
custom_providers:
  - name: novaapi
    base_url: https://api.novaapis.com/v1
    key_env: NOVA_API_KEY

model:
  default: gpt-5            # any tool-calling model
  provider:
    custom: novaapi
```

```bash
# ~/.hermes/.env
NOVA_API_KEY=sk-your-NovaAPI-key
```

- `base_url`: NovaAPI's OpenAI-compatible endpoint
- `key_env`: the env var in `.env` that holds the key
- `model.provider.custom`: the custom provider name defined above

> `config.yaml` is the single source of truth for model, provider, and base URL.

---

## 3. Run

```bash
hermes
```

Switch models mid-session with `/model`, or re-run `hermes model` to reconfigure. Run `hermes doctor` if a provider isn't recognized.
