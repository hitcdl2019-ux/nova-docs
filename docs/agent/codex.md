# Codex 接入

[Codex](https://github.com/openai/codex) 是 OpenAI 官方的命令行编程智能体。在配置文件里自定义一个 model provider，即可把请求指向 NovaAPI。本文从零开始，覆盖 Windows / macOS / Linux。

## 环境要求

- **Node.js 18 或更高版本**（通过 npm 安装 Codex）
- 操作系统：Windows 10+ / macOS / Linux
- 一个 NovaAPI 控制台生成的 API Key（`sk-` 开头）

---

## 一、准备 Node.js 环境

先检查：

```bash
node -v
```

输出 `v18` 及以上即可跳到[第二步](#二、安装-codex)。否则按系统安装。

### Windows

```powershell
winget install OpenJS.NodeJS.LTS
```

或到 <https://nodejs.org> 下载 LTS 版 `.msi` 安装包安装（勾选 “Add to PATH”）。重开终端后验证 `node -v`、`npm -v`。

### macOS

```bash
brew install node
```

（无 Homebrew 时先装：`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`）

### Linux

Debian / Ubuntu：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora：`sudo dnf install -y nodejs`　Arch：`sudo pacman -S nodejs npm`

> 跨系统推荐用 [nvm](https://github.com/nvm-sh/nvm)（Windows 用 nvm-windows）管理版本，`nvm install --lts`。

---

## 二、安装 Codex

npm 全局安装（三系统通用）：

```bash
npm install -g @openai/codex
```

macOS 也可用 Homebrew：

```bash
brew install codex
```

验证：

```bash
codex --version
```

> **Windows 权限**：若报权限错误，用管理员 PowerShell 执行。**macOS / Linux**：避免 `sudo npm`，可参照 Claude Code 页设置用户级 npm 全局目录。

---

## 三、配置 `config.toml`

配置文件位置：

- macOS / Linux：`~/.codex/config.toml`
- Windows：`%USERPROFILE%\.codex\config.toml`

若文件/目录不存在，手动创建。写入：

```toml
model = "gpt-5"
model_provider = "novaapi"

[model_providers.novaapi]
name = "NovaAPI"
base_url = "https://api.novaapis.com/v1"
env_key = "NOVA_API_KEY"
wire_api = "chat"
```

- `base_url`：NovaAPI 的 OpenAI 兼容地址
- `env_key`：从哪个环境变量读取密钥
- `wire_api = "chat"`：走 `/chat/completions` 接口（接第三方兼容端点时必填）
- `model`：改为[模型列表](/api/models)中任意支持工具调用的模型

---

## 四、设置密钥

### macOS / Linux

```bash
export NOVA_API_KEY="sk-你的NovaAPIKey"
```

写入 `~/.zshrc` 或 `~/.bashrc` 持久化。

### Windows PowerShell

```powershell
setx NOVA_API_KEY "sk-你的NovaAPIKey"      # 永久，重开终端生效
$env:NOVA_API_KEY="sk-你的NovaAPIKey"      # 仅当前会话
```

> 变量名要与 `config.toml` 里的 `env_key` 一致。

---

## 五、运行

进入项目目录，执行：

```bash
codex
```
