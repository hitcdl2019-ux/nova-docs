# 函数调用（Function Calling）

通过 `tools` 参数声明可调用的函数，模型会在需要时返回 `tool_calls`，由你的程序执行后把结果回传给模型。

## 1. 声明工具并发起请求

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{ "role": "user", "content": "北京今天天气怎么样？" }],
    "tools": [{
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "查询指定城市的天气",
        "parameters": {
          "type": "object",
          "properties": {
            "city": { "type": "string", "description": "城市名" }
          },
          "required": ["city"]
        }
      }
    }]
  }'
```

## 2. 处理模型返回的 tool_calls

模型若决定调用工具，会在响应中返回 `tool_calls`（含函数名与参数）。你的程序执行真实函数，再把结果作为 `role: "tool"` 消息追加回 `messages`，发起第二次请求，模型据此生成最终回答。

## 3. 调用流程

1. 客户端发起请求，附带 `tools` 声明
2. 模型返回 `tool_calls`
3. 客户端执行对应函数，得到结果
4. 把结果以 `tool` 消息回传，再次请求
5. 模型综合结果输出最终答复

> 工具调用能力依模型而异，请选用支持 Function Calling 的模型。
