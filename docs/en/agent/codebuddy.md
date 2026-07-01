# WorkBuddy / CodeBuddy

[WorkBuddy / CodeBuddy](https://www.codebuddy.ai) are AI agent and coding-assistant tools from Tencent Cloud. They support adding **custom models** via a local model config file, so you can connect NovaAPI through the OpenAI-compatible Chat Completions API.

## 1. Install and sign in

- Download and install the WorkBuddy / CodeBuddy desktop app, or install the command-line edition (CodeBuddy Code CLI):

  ```bash
  npm install -g @tencent-ai/codebuddy-code
  ```

- Launch it once and complete sign-in as prompted.
- **Open a project directory at least once** so the app creates its local config directory (`.codebuddy`).
- Get an API Key from the NovaAPI console (starts with `sk-`).

## 2. Configure a local model

Create or edit the **user-level** config file:

- Windows: `C:\Users\<your-username>\.codebuddy\models.json`
- macOS / Linux: `~/.codebuddy/models.json`

To scope the config to a single project, create a **project-level** file instead: `<your-project>/.codebuddy/models.json`.

First set your NovaAPI Key as an environment variable:

```powershell
# Windows PowerShell (persistent, reopen terminal)
setx NOVA_API_KEY "sk-your-NovaAPI-key"
```

```bash
# macOS / Linux
export NOVA_API_KEY="sk-your-NovaAPI-key"
```

Then write this config:

```json
{
  "models": [
    {
      "id": "gpt-5",
      "name": "GPT-5",
      "vendor": "NovaAPI",
      "url": "https://api.novaapis.com/v1/chat/completions",
      "apiKey": "${NOVA_API_KEY}",
      "maxInputTokens": 128000,
      "maxOutputTokens": 8192,
      "supportsToolCall": true,
      "supportsImages": false
    }
  ],
  "availableModels": ["gpt-5"]
}
```

- `url`: NovaAPI's OpenAI-compatible endpoint — include the full `/v1/chat/completions` path
- `apiKey`: `${NOVA_API_KEY}` reads the key from an env var (you can also paste the `sk-...` key directly)
- `id` / `name`: the model ID and display name; take `id` from the [model list](/en/api/models), add more entries as needed
- `supportsToolCall`: set `true` when using a tool-calling model

> Save `models.json` as **UTF-8 without BOM**. Some desktop builds fail to load the local model config from a JSON file that carries a UTF-8 BOM.

## 3. Restart and pick the model

Fully quit WorkBuddy / CodeBuddy, reopen it, and select your configured model (e.g. **GPT-5**) in the model picker.

## 4. Optional: verify the API Key

```powershell
# Windows PowerShell
$env:NOVA_API_KEY="sk-your-NovaAPI-key"
curl https://api.novaapis.com/v1/chat/completions `
  -H "Content-Type: application/json" `
  -H "Authorization: Bearer $env:NOVA_API_KEY" `
  -d '{"model":"gpt-5","messages":[{"role":"user","content":"hi"}],"stream":false}'
```

```bash
# macOS / Linux
curl https://api.novaapis.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -d '{"model":"gpt-5","messages":[{"role":"user","content":"hi"}],"stream":false}'
```

A successful response confirms the API Key and model name both work.

## FAQ

- **Authentication fails / 401**: check that `apiKey` is a real NovaAPI Key — don't put the endpoint URL in the API Key field.
- **Model not found / 404**: check that the model `id` matches the [model list](/en/api/models) exactly.
- **Failed to read local model config**: verify `models.json` is valid JSON and saved as UTF-8 without BOM.
- **Not shown in the model picker**: fully restart the app and confirm the file is at `.codebuddy/models.json`.
- **UI shows `${NOVA_API_KEY}` literally**: restart the app from a terminal where the env var is set; if the desktop build still doesn't expand it, put the real API Key directly in the UI or `models.json`.
