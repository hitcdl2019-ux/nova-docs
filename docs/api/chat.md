# 对话补全

`POST /v1/chat/completions` —— 最常用的文本对话接口，兼容 OpenAI Chat Completions 格式。

## 请求示例

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [
      { "role": "system", "content": "你是一个乐于助人的助手。" },
      { "role": "user", "content": "用一句话介绍 NovaAPI" }
    ]
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novaapis.com/v1")

resp = client.chat.completions.create(
    model="gpt-5.5",
    messages=[
        {"role": "system", "content": "你是一个乐于助人的助手。"},
        {"role": "user", "content": "用一句话介绍 NovaAPI"},
    ],
)
print(resp.choices[0].message.content)
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const resp = await client.chat.completions.create({
  model: 'gpt-5.5',
  messages: [
    { role: 'system', content: '你是一个乐于助人的助手。' },
    { role: 'user', content: '用一句话介绍 NovaAPI' },
  ],
})
console.log(resp.choices[0].message.content)
```

:::

## 常用参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `model` | string | 模型名称，见[模型列表](/api/models) |
| `messages` | array | 对话消息数组 |
| `stream` | boolean | 是否流式返回，默认 `false` |
| `temperature` | number | 采样温度，0~2 |
| `max_tokens` | number | 最大生成 token 数 |

## 流式返回

设置 `"stream": true`，服务端以 SSE 分块推送内容：

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [{ "role": "user", "content": "讲个笑话" }],
    "stream": true
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="...", base_url="https://api.novaapis.com/v1")

stream = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "讲个笑话"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices: 
        print(chunk.choices[0].delta.content or "", end="")
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const stream = await client.chat.completions.create({
  model: 'gpt-5.5',
  messages: [{ role: 'user', content: '讲个笑话' }],
  stream: true,
})
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '')
}
```

:::
