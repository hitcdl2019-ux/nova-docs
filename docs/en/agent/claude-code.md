# Claude Code

[Claude Code](https://docs.claude.com/claude-code) is Anthropic's official command-line coding agent, using the Anthropic Messages protocol. NovaAPI is compatible with this protocol — just point the endpoint at NovaAPI. This guide starts from scratch and covers Windows / macOS / Linux.

## Requirements

- **Node.js 18 or newer** (Claude Code ships via npm)
- OS: Windows 10+ / macOS / Linux
- An API Key from the NovaAPI console (starts with `sk-`)

---

## 1. Prepare the Node.js environment

Check whether it's already installed:

```bash
node -v
```

If it prints `v18` or higher, skip to [step 2](#_2-install-claude-code). Otherwise install it for your OS.

### Windows

Option A (recommended, winget):

```powershell
winget install OpenJS.NodeJS.LTS
```

Option B: open <https://nodejs.org>, download the **LTS** `.msi` installer, run it, and keep "Add to PATH" checked.

**Reopen** your terminal (PowerShell) and verify:

```powershell
node -v
npm -v
```

### macOS

Option A (recommended, Homebrew):

```bash
brew install node
```

If Homebrew isn't installed yet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Option B: download the `.pkg` installer from <https://nodejs.org>.

Verify: `node -v`

### Linux

Debian / Ubuntu (NodeSource LTS):

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora / RHEL / CentOS:

```bash
sudo dnf install -y nodejs
```

Arch:

```bash
sudo pacman -S nodejs npm
```

Verify: `node -v`

> **Cross-platform option**: use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions (`nvm install --lts`). On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows).

---

## 2. Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Verify:

```bash
claude --version
```

**Permission troubleshooting**

- **Windows**: if the global install throws `EACCES`/permission errors, reopen PowerShell **as Administrator** and retry.
- **macOS / Linux**: avoid `sudo npm`. On permission errors, use a user-level global prefix:

  ```bash
  mkdir -p ~/.npm-global
  npm config set prefix ~/.npm-global
  echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc   # bash users: ~/.bashrc
  source ~/.zshrc
  ```

---

## 3. Point it at NovaAPI

Claude Code uses the Anthropic protocol — two environment variables point it at NovaAPI.

### macOS / Linux (bash / zsh)

```bash
export ANTHROPIC_BASE_URL="https://api.novaapis.com"
export ANTHROPIC_AUTH_TOKEN="sk-your-NovaAPI-key"
```

To persist, add both lines to `~/.zshrc` (zsh) or `~/.bashrc` (bash), then `source` it.

### Windows PowerShell

```powershell
# Persist (takes effect after reopening the terminal)
setx ANTHROPIC_BASE_URL "https://api.novaapis.com"
setx ANTHROPIC_AUTH_TOKEN "sk-your-NovaAPI-key"

# Current session only
$env:ANTHROPIC_BASE_URL="https://api.novaapis.com"
$env:ANTHROPIC_AUTH_TOKEN="sk-your-NovaAPI-key"
```

> ⚠️ Set `ANTHROPIC_BASE_URL` to the **domain only** — do not append `/v1`. Claude Code adds `/v1/messages` automatically.

### Pick models (optional)

```bash
export ANTHROPIC_MODEL="claude-sonnet-4-5"
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-4-5"
```

Use the model names actually offered by NovaAPI; see the [model list](/en/api/models).

---

## 4. Run

From your project directory:

```bash
claude
```

The first run opens the interactive UI — just start chatting.

---

## 5. Persistent config (optional, cross-platform)

To avoid setting variables each time, write a config file:

- macOS / Linux: `~/.claude/settings.json`
- Windows: `%USERPROFILE%\.claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.novaapis.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-NovaAPI-key",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5"
  }
}
```
