# Codex 接入

[Codex](https://github.com/openai/codex) 是 OpenAI 官方的命令行编程智能体。在配置文件中自定义一个 model provider，即可把请求指向 NovaAPI。

## 1. 安装

```bash
npm install -g @openai/codex
```

## 2. 配置 `~/.codex/config.toml`

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
- `wire_api = "chat"`：走 `/chat/completions` 接口（第三方兼容端点必填）

## 3. 设置密钥并运行

```bash
export NOVA_API_KEY="sk-你的NovaAPIKey"
codex
```

> `model` 可改为[模型列表](/api/models)中任意支持工具调用的模型。
