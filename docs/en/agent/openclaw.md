# OpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) is an OpenAI-compatible AI assistant/gateway. Add NovaAPI as a custom model provider in its config and point the endpoint at NovaAPI with a NovaAPI Key. This guide starts from scratch and covers Windows / macOS / Linux.

## Requirements

- **Node.js 24 (recommended) or 22.19+** — OpenClaw installs via npm
- OS: Windows 10+ / macOS / Linux
- An API Key from the NovaAPI console (starts with `sk-`)

---

## 1. Prepare the Node.js environment

OpenClaw needs a newer Node than most tools — **Node 24 recommended, 22.19+ minimum**. Check first:

```bash
node -v
```

If it prints `v24` (or `v22.19`+), skip to [step 2](#_2-install-openclaw). Otherwise install for your OS.

### Windows

```powershell
winget install OpenJS.NodeJS
```

Or download the current `.msi` from <https://nodejs.org> (keep "Add to PATH"). Reopen the terminal and verify `node -v`, `npm -v`.

### macOS

```bash
brew install node
```

(No Homebrew? `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)

### Linux

Debian / Ubuntu:

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora: `sudo dnf install -y nodejs`　Arch: `sudo pacman -S nodejs npm`

> Cross-platform: use [nvm](https://github.com/nvm-sh/nvm) (nvm-windows on Windows), then `nvm install 24`.

---

## 2. Install OpenClaw

Global npm install (all three OSes):

```bash
npm install -g openclaw@latest
# or: pnpm add -g openclaw@latest
```

Then run the onboarding wizard (works on macOS / Linux / Windows). It sets up the gateway, workspace, and (optionally) a background daemon:

```bash
openclaw onboard --install-daemon
```

Verify:

```bash
openclaw --version
```

> **Windows permissions**: on errors, run PowerShell as Administrator. **macOS / Linux**: avoid `sudo npm`; use a user-level npm prefix.

---

## 3. Point it at NovaAPI

OpenClaw reads config from `~/.openclaw/openclaw.json` (Windows: `%USERPROFILE%\.openclaw\openclaw.json`). Add NovaAPI as a custom OpenAI-compatible provider under `models.providers`, then set it as the default agent model.

```json5
{
  agent: {
    model: "novaapi/gpt-5",
  },
  models: {
    mode: "merge",
    providers: {
      novaapi: {
        baseUrl: "https://api.novaapis.com/v1",
        apiKey: "${NOVA_API_KEY}",
        api: "openai-completions",
        models: [
          { id: "gpt-5", name: "GPT-5" },
        ],
      },
    },
  },
}
```

- `baseUrl`: NovaAPI's OpenAI-compatible endpoint (`https://api.novaapis.com/v1`)
- `apiKey`: `${NOVA_API_KEY}` reads the key from an environment variable (you can also paste the `sk-...` key directly)
- `api: "openai-completions"`: use the OpenAI `/chat/completions` protocol
- `models[].id`: any tool-calling model from the [model list](/en/api/models); add more entries as needed
- `agent.model`: `<provider>/<model-id>`, i.e. `novaapi/gpt-5`
- `mode: "merge"`: keep the built-in providers and add NovaAPI alongside them

---

## 4. Set the key

### macOS / Linux

```bash
export NOVA_API_KEY="sk-your-NovaAPI-key"
```

Persist by adding to `~/.zshrc` or `~/.bashrc`.

### Windows PowerShell

```powershell
setx NOVA_API_KEY "sk-your-NovaAPI-key"      # persistent, reopen terminal
$env:NOVA_API_KEY="sk-your-NovaAPI-key"      # current session only
```

> The variable name must match `${NOVA_API_KEY}` in `openclaw.json`.

---

## 5. Run

Start (or restart) the gateway, then talk to the assistant:

```bash
openclaw gateway status
openclaw agent --message "Hello from NovaAPI"
```

Useful checks:

```bash
openclaw models list      # list configured models
openclaw models status    # show provider auth + endpoints
openclaw doctor           # diagnose config issues
```
