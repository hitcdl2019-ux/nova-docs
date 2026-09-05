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
model = "deepseek-v4-pro"
model_provider = "novaapi"
model_reasoning_effort = "high"
preferred_auth_method = "apikey"
forced_login_method = "api"

[model_providers.novaapi]
name = "NovaAPI"
base_url = "https://direct.novaapis.com/v1"
env_key = "NOVA_API_KEY"
wire_api = "responses"
```

- `base_url`：NovaAPI 的 OpenAI 兼容地址
- `env_key`：从哪个环境变量读取密钥
- `wire_api = "responses"`：Codex 使用 Responses API，此项必须设为 `responses`
- `model`：改为[模型列表](/api/models)中任意支持工具调用的模型

---

## 四、设置密钥

### macOS / Linux

```bash
export NOVA_API_KEY="YOUR_NOVAAPI_KEY"
```

写入 `~/.zshrc` 或 `~/.bashrc` 持久化。

### Windows PowerShell

```powershell
setx NOVA_API_KEY "YOUR_NOVAAPI_KEY"      # 永久，重开终端生效
$env:NOVA_API_KEY="YOUR_NOVAAPI_KEY"      # 仅当前会话
```

> 变量名要与 `config.toml` 里的 `env_key` 一致。

---

## 五、运行

进入项目目录，执行：

```bash
codex
```

## 六、第三方模型兼容性

- DeepSeek V4 系列可使用 NovaAPI 的原生 Responses 适配。
- GLM、MiniMax 等仅支持 Chat Completions 的模型，需要管理员在 NovaAPI 后台为对应渠道开启 Responses 到 Chat Completions 兼容策略。
- 百度千帆中的 GLM-5.3 建议按具体渠道 ID 启用兼容策略，避免影响同类型的其他渠道。
- 模型出现在列表中不代表一定可调用；还需要有健康渠道、模型权限和充足余额。
- 兼容层支持文本、流式输出和 function tools，但不支持 `custom tools`、托管工具和 `previous_response_id`。

## 七、排查配置

```bash
codex --version
codex --strict-config doctor
```

如果出现 `unsupported relay mode`，请检查 `wire_api` 是否为 `responses`，以及目标渠道是否已开启 Responses 兼容策略。
