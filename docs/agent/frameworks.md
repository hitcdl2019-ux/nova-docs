# 框架接入

NovaAPI 兼容 OpenAI 接口，主流 Agent / LLM 框架只需把 `base_url` 指向 NovaAPI 即可。

## LangChain

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key="你的 NovaAPI Key",
    base_url="https://api.novaapis.com/v1",
)
print(llm.invoke("你好").content)
```

## LlamaIndex

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    model="gpt-4o-mini",
    api_key="你的 NovaAPI Key",
    api_base="https://api.novaapis.com/v1",
)
```

## OpenAI 官方 SDK（含 Node.js）

```javascript
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})
```

> 原则上：任何允许自定义 `base_url` / `api_base` 的 OpenAI 兼容框架都能接入，把地址改为 `https://api.novaapis.com/v1`、密钥换成 NovaAPI Key 即可。
