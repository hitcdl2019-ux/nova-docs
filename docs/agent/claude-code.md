# Claude Code 接入

[Claude Code](https://docs.claude.com/claude-code) 是 Anthropic 官方的命令行编程智能体，使用 Anthropic Messages 协议。NovaAPI 已兼容该协议，只需把接口地址指向 NovaAPI 即可。

## 1. 安装

```bash
npm install -g @anthropic-ai/claude-code
```

## 2. 配置环境变量

```bash
export ANTHROPIC_BASE_URL="https://api.novaapis.com"
export ANTHROPIC_AUTH_TOKEN="sk-你的NovaAPIKey"
```

> `ANTHROPIC_BASE_URL` 只填到域名，**不要**带 `/v1`——Claude Code 会自动追加 `/v1/messages`。

## 3. 指定模型（可选）

```bash
export ANTHROPIC_MODEL="claude-sonnet-4-5"
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-4-5"
```

模型名以[模型列表](/api/models)中 NovaAPI 实际提供的为准。

## 4. 运行

```bash
claude
```

## 持久化配置（可选）

也可写入 `~/.claude/settings.json`，免去每次导出环境变量：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.novaapis.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的NovaAPIKey",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5"
  }
}
```
