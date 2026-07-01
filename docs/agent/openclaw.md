# OpenClaw 接入

[OpenClaw](https://github.com/openclaw/openclaw) 兼容 OpenAI 接口，把 NovaAPI 作为自定义模型服务商写入它的配置、接口地址指向 NovaAPI、密钥换成 NovaAPI Key 即可。本文从零开始，覆盖 Windows / macOS / Linux。

## 环境要求

- **Node.js 24（推荐）或 22.19+** —— OpenClaw 通过 npm 安装
- 操作系统：Windows 10+ / macOS / Linux
- NovaAPI 控制台生成的 API Key（以 `sk-` 开头）

---

## 一、准备 Node.js 环境

OpenClaw 对 Node 版本要求较高——**推荐 Node 24，最低 22.19+**。先检查：

```bash
node -v
```

若输出 `v24`（或 `v22.19`+），可直接跳到[第二步](#_2-安装-openclaw)。否则按系统安装。

### Windows

```powershell
winget install OpenJS.NodeJS
```

或从 <https://nodejs.org> 下载最新版 `.msi`（保留 "Add to PATH"）。重开终端后用 `node -v`、`npm -v` 验证。

### macOS

```bash
brew install node
```

（没有 Homebrew？`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`）

### Linux

Debian / Ubuntu：

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Fedora：`sudo dnf install -y nodejs`　Arch：`sudo pacman -S nodejs npm`

> 跨平台可用 [nvm](https://github.com/nvm-sh/nvm)（Windows 用 nvm-windows），然后 `nvm install 24`。

---

## 二、安装 OpenClaw

全局安装（三系统通用）：

```bash
npm install -g openclaw@latest
# 或：pnpm add -g openclaw@latest
```

然后运行引导向导（macOS / Linux / Windows 均可），它会配置网关、工作区，并可选安装后台守护进程：

```bash
openclaw onboard --install-daemon
```

验证：

```bash
openclaw --version
```

> **Windows 权限**：报错时以管理员身份运行 PowerShell。**macOS / Linux**：不要用 `sudo npm`，改用用户级 npm 前缀。

---

## 三、配置指向 NovaAPI

OpenClaw 的配置文件在 `~/.openclaw/openclaw.json`（Windows：`%USERPROFILE%\.openclaw\openclaw.json`）。在 `models.providers` 下把 NovaAPI 作为自定义的 OpenAI 兼容服务商加入，再把它设为默认模型。

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

- `baseUrl`：NovaAPI 的 OpenAI 兼容接口地址（`https://api.novaapis.com/v1`）
- `apiKey`：`${NOVA_API_KEY}` 表示从环境变量读取密钥（也可直接填 `sk-...`）
- `api: "openai-completions"`：走 OpenAI 的 `/chat/completions` 协议
- `models[].id`：填[模型列表](/api/models)中支持工具调用的模型，可按需添加多条
- `agent.model`：格式为 `<服务商>/<模型ID>`，即 `novaapi/gpt-5`
- `mode: "merge"`：保留内置服务商，把 NovaAPI 并入而非替换

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

> 变量名必须与 `openclaw.json` 中的 `${NOVA_API_KEY}` 一致。

---

## 五、运行

启动（或重启）网关，然后与助手对话：

```bash
openclaw gateway status
openclaw agent --message "Hello from NovaAPI"
```

常用检查：

```bash
openclaw models list      # 列出已配置的模型
openclaw models status    # 查看服务商鉴权与接口地址
openclaw doctor           # 诊断配置问题
```
