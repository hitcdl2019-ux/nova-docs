# Codex

[Codex](https://github.com/openai/codex) is OpenAI's official command-line coding agent. Define a custom model provider in its config file to route requests to NovaAPI. This guide starts from scratch and covers Windows / macOS / Linux.

## Requirements

- **Node.js 18 or newer** (Codex installs via npm)
- OS: Windows 10+ / macOS / Linux
- An API Key from the NovaAPI console (starts with `sk-`)

---

## 1. Prepare the Node.js environment

Check first:

```bash
node -v
```

If it prints `v18` or higher, skip to [step 2](#_2-install-codex). Otherwise install for your OS.

### Windows

```powershell
winget install OpenJS.NodeJS.LTS
```

Or download the LTS `.msi` from <https://nodejs.org> (keep "Add to PATH"). Reopen the terminal and verify `node -v`, `npm -v`.

### macOS

```bash
brew install node
```

(No Homebrew? `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)

### Linux

Debian / Ubuntu:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora: `sudo dnf install -y nodejs`　Arch: `sudo pacman -S nodejs npm`

> Cross-platform: use [nvm](https://github.com/nvm-sh/nvm) (nvm-windows on Windows), then `nvm install --lts`.

---

## 2. Install Codex

Global npm install (all three OSes):

```bash
npm install -g @openai/codex
```

macOS can also use Homebrew:

```bash
brew install codex
```

Verify:

```bash
codex --version
```

> **Windows permissions**: on errors, run PowerShell as Administrator. **macOS / Linux**: avoid `sudo npm`; use a user-level npm prefix as shown on the Claude Code page.

---

## 3. Configure `config.toml`

Config file location:

- macOS / Linux: `~/.codex/config.toml`
- Windows: `%USERPROFILE%\.codex\config.toml`

Create the file/directory if it doesn't exist, then write:

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
- `model`: any tool-calling model from the [model list](/en/api/models)

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

> The variable name must match `env_key` in `config.toml`.

---

## 5. Run

From your project directory:

```bash
codex
```
