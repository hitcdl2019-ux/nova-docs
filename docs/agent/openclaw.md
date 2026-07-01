# OpenClaw 接入

[OpenClaw](https://github.com/openclaw/openclaw) 兼容 OpenAI 接口，把它的模型接口地址（`base_url`）指向 NovaAPI、密钥换成 NovaAPI Key 即可。

## 一、安装

请以官方仓库 <https://github.com/openclaw/openclaw> 的 README 为准进行安装。

> 📌 本节安装命令待补充：由于文档撰写环境无法联网抓取该仓库，具体的分系统（Windows / macOS / Linux）安装步骤将按官方 README 补齐。

## 二、配置指向 NovaAPI

OpenClaw 走 OpenAI 协议，用环境变量指定接口地址与密钥。

### macOS / Linux（bash / zsh）

```bash
export OPENAI_BASE_URL="https://api.novaapis.com/v1"
export OPENAI_API_KEY="sk-你的NovaAPIKey"
```

写入 `~/.zshrc` 或 `~/.bashrc` 持久化。

### Windows PowerShell

```powershell
setx OPENAI_BASE_URL "https://api.novaapis.com/v1"     # 永久，重开终端生效
setx OPENAI_API_KEY "sk-你的NovaAPIKey"

$env:OPENAI_BASE_URL="https://api.novaapis.com/v1"     # 仅当前会话
$env:OPENAI_API_KEY="sk-你的NovaAPIKey"
```

## 要点

- 接口地址填 `https://api.novaapis.com/v1`（OpenAI 兼容）
- 密钥使用 NovaAPI 控制台生成的 Key
- 模型名以[模型列表](/api/models)为准，选择支持工具调用的模型

> 若 OpenClaw 使用独立配置文件，把其中的 `base_url` / `api_base` 字段填为上述地址即可，原理一致。
