# Framework Integration

NovaAPI is OpenAI-compatible, so mainstream agent / LLM frameworks only need their `base_url` pointed at NovaAPI.

## LangChain

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key="your NovaAPI Key",
    base_url="https://api.novaapis.com/v1",
)
print(llm.invoke("Hello").content)
```

## LlamaIndex

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    model="gpt-4o-mini",
    api_key="your NovaAPI Key",
    api_base="https://api.novaapis.com/v1",
)
```

## OpenAI official SDK (incl. Node.js)

```javascript
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NOVA_API_KEY,
  baseURL: 'https://api.novaapis.com/v1',
})
```

> In general: any OpenAI-compatible framework that allows a custom `base_url` / `api_base` can integrate — set the URL to `https://api.novaapis.com/v1` and use your NovaAPI Key.
