# 快速开始

欢迎使用 NovaAPI 文档中心。本页帮助你在几分钟内完成第一次 API 调用。

## 1. 注册并获取 API Key

前往 [NovaAPI 主站](https://api.novaapis.com/) 注册账号，在控制台创建一个 API Key。

## 2. 发起第一次调用

NovaAPI 提供 OpenAI 兼容接口，将 `base_url` 指向 NovaAPI 即可：

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      { "role": "user", "content": "你好，介绍一下你自己" }
    ]
  }'
```

## 3. 使用官方 SDK

任何 OpenAI 兼容的 SDK 都可直接使用，只需替换 `base_url`：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的 NovaAPI Key",
    base_url="https://api.novaapis.com/v1",
)

resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "你好"}],
)
print(resp.choices[0].message.content)
```

## 下一步

- 了解 [鉴权方式](/guide/authentication)
- 查看 [API 参考](/api/overview)
