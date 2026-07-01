# 快速开始

几分钟完成第一次 API 调用。

## 1. 注册并获取 API Key

前往 [NovaAPI 主站](https://api.novaapis.com/) 注册账号，在控制台创建一个 API Key。

## 2. 鉴权方式

所有请求都需要在请求头中携带密钥：

```http
Authorization: Bearer YOUR_API_KEY
```

安全建议：

- 不要把密钥硬编码进前端代码或公开仓库
- 通过环境变量注入，例如 `NOVA_API_KEY`
- 发现泄露时立即在控制台禁用并重新生成
- 不同用途用不同密钥，便于追踪用量与限额

## 3. 发起第一次调用

NovaAPI 提供 OpenAI 兼容接口，将 `base_url` 指向 NovaAPI 即可：

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [
      { "role": "user", "content": "你好，介绍一下你自己" }
    ]
  }'
```

## 4. 使用官方 SDK

任何 OpenAI 兼容 SDK 都可直接使用，只需替换 `base_url`：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的 NovaAPI Key",
    base_url="https://api.novaapis.com/v1",
)

resp = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "你好"}],
)
print(resp.choices[0].message.content)
```

## 下一步

- 浏览 [API 使用](/api/overview) 了解各接口
- 查看 [Agent 工具接入](/agent/overview) 实现函数调用
