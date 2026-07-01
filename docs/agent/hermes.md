# Hermes 接入

Hermes 兼容 OpenAI 接口，把它的模型接口地址（`base_url`）指向 NovaAPI、密钥换成 NovaAPI Key 即可。

## 配置环境变量

```bash
export OPENAI_BASE_URL="https://api.novaapis.com/v1"
export OPENAI_API_KEY="sk-你的NovaAPIKey"
```

## 要点

- 接口地址填 `https://api.novaapis.com/v1`（OpenAI 兼容）
- 密钥使用 NovaAPI 控制台生成的 Key
- 模型名以[模型列表](/api/models)为准，选择支持工具调用的模型

> 若 Hermes 使用独立配置文件，把其中的 `base_url` / `api_base` 字段填为上述地址即可，原理一致。
