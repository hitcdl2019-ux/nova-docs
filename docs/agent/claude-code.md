# Claude Code 接入

[Claude Code](https://docs.claude.com/claude-code) 是 Anthropic 官方的命令行编程智能体，使用 Anthropic Messages 协议。NovaAPI 已兼容该协议，只需把接口地址指向 NovaAPI 即可。本文从零开始，覆盖 Windows / macOS / Linux 全流程。

## 环境要求

- **Node.js 18 或更高版本**（Claude Code 通过 npm 分发）
- 操作系统：Windows 10+ / macOS / Linux
- 一个 NovaAPI 控制台生成的 API Key（`sk-` 开头）

---

## 一、准备 Node.js 环境

先检查是否已安装：

```bash
node -v
```

若输出 `v18` 及以上，跳到[第二步](#二、安装-claude-code)。否则按你的系统安装。

### Windows

方式 A（推荐，使用 winget）：

```powershell
winget install OpenJS.NodeJS.LTS
```

方式 B：打开 <https://nodejs.org>，下载 **LTS** 版安装包（`.msi`），双击安装，保持勾选 “Add to PATH”。

安装后**重新打开**终端（PowerShell）验证：

```powershell
node -v
npm -v
```

### macOS

方式 A（推荐，使用 Homebrew）：

```bash
brew install node
```

若尚未安装 Homebrew：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

方式 B：打开 <https://nodejs.org> 下载 `.pkg` 安装包双击安装。

验证：`node -v`

### Linux

Debian / Ubuntu（NodeSource LTS）：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora / RHEL / CentOS：

```bash
sudo dnf install -y nodejs
```

Arch：

```bash
sudo pacman -S nodejs npm
```

验证：`node -v`

> **跨系统通用方案**：用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node 版本，安装后执行 `nvm install --lts`。Windows 用户可用 [nvm-windows](https://github.com/coreybutler/nvm-windows)。

---

## 二、安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：

```bash
claude --version
```

**权限问题排查**

- **Windows**：若全局安装报 `EACCES` 或权限错误，用**管理员身份**打开 PowerShell 再执行。
- **macOS / Linux**：不建议用 `sudo npm`。若报权限错误，改用用户级全局目录：

  ```bash
  mkdir -p ~/.npm-global
  npm config set prefix ~/.npm-global
  echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc   # bash 用户写入 ~/.bashrc
  source ~/.zshrc
  ```

---

## 三、配置指向 NovaAPI

Claude Code 走 Anthropic 协议，用两个环境变量把它指向 NovaAPI。

### macOS / Linux（bash / zsh）

```bash
export ANTHROPIC_BASE_URL="https://api.novaapis.com"
export ANTHROPIC_AUTH_TOKEN="sk-你的NovaAPIKey"
```

要长期生效，把上面两行写入 `~/.zshrc`（zsh）或 `~/.bashrc`（bash），再 `source` 一次。

### Windows PowerShell

```powershell
# 永久写入（重开终端生效）
setx ANTHROPIC_BASE_URL "https://api.novaapis.com"
setx ANTHROPIC_AUTH_TOKEN "sk-你的NovaAPIKey"

# 仅当前会话临时生效
$env:ANTHROPIC_BASE_URL="https://api.novaapis.com"
$env:ANTHROPIC_AUTH_TOKEN="sk-你的NovaAPIKey"
```

> ⚠️ `ANTHROPIC_BASE_URL` **只填到域名**，不要带 `/v1`——Claude Code 会自动追加 `/v1/messages`。

### 指定模型（可选）

```bash
export ANTHROPIC_MODEL="claude-sonnet-4-5"
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-4-5"
```

模型名以[模型列表](/api/models)中 NovaAPI 实际提供的为准。

---

## 四、运行

进入你的项目目录，执行：

```bash
claude
```

首次运行会进入交互界面，直接开始对话即可。

---

## 五、持久化配置（可选，跨系统通用）

不想每次设置环境变量，可写入配置文件：

- macOS / Linux：`~/.claude/settings.json`
- Windows：`%USERPROFILE%\.claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.novaapis.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的NovaAPIKey",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5"
  }
}
```
