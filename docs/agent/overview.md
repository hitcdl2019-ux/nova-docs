# Agent 工具接入概览

NovaAPI 同时兼容 **OpenAI** 与 **Anthropic** 两套接口协议，可作为各类编程智能体（Coding Agent）和 Agent 框架的模型后端。无论是命令行编程助手，还是自建的工具编排应用，只需把接口地址指向 NovaAPI，就能用同一份额度调用各家模型。

## 一、编程智能体 CLI

把命令行智能体的接口地址指向 NovaAPI，即可统一计费、自由切换模型：

- [Claude Code](/agent/claude-code)：Anthropic 协议，配置 `ANTHROPIC_BASE_URL`
- [Codex](/agent/codex)：OpenAI 协议，配置 `~/.codex/config.toml`
- [OpenClaw](/agent/openclaw)：OpenAI 兼容，配置 `base_url`
- [Hermes](/agent/hermes)：OpenAI 兼容，配置 `base_url`

## 二、函数调用

- [函数调用](/agent/function-calling)：`tools` 声明与调用流程

## 通用要点

1. **OpenAI 协议**：`base_url` 填 `https://api.novaapis.com/v1`
2. **Anthropic 协议**：`ANTHROPIC_BASE_URL` 填 `https://api.novaapis.com`（不带 `/v1`）
3. **密钥**：统一使用 NovaAPI 控制台生成的 Key（`sk-` 开头）
4. **模型**：选择支持工具调用的模型，具体名称以[模型列表](/api/models)为准
