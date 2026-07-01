# 模型列表

`GET /v1/models` —— 查询当前账号可调用的模型。

## 请求示例

::: code-group

```bash [cURL]
curl https://api.novaapis.com/v1/models \
  -H "Authorization: Bearer $NOVA_API_KEY"
```

```python [Python]
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novaapis.com/v1")

models = client.models.list()
for m in models.data:
    print(m.id)
```

```javascript [Node.js]
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})

const models = await client.models.list()
for (const m of models.data) console.log(m.id)
```

:::

## 说明

- 返回结果为 OpenAI 兼容的模型列表结构。
- 可用模型、上下文长度、价格与限额会随上游调整而变化。
- 完整模型与定价请以 [主站模型中心](https://api.novaapis.com/pricing) 为准。
