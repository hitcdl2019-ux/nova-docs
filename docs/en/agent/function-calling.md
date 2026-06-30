# Function Calling

Declare callable functions via the `tools` parameter. When needed, the model returns `tool_calls`; your program executes them and sends the results back to the model.

## 1. Declare tools and send the request

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{ "role": "user", "content": "What is the weather in Beijing today?" }],
    "tools": [{
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get the weather for a given city",
        "parameters": {
          "type": "object",
          "properties": {
            "city": { "type": "string", "description": "City name" }
          },
          "required": ["city"]
        }
      }
    }]
  }'
```

## 2. Handle the returned tool_calls

If the model decides to call a tool, it returns `tool_calls` (with the function name and arguments). Your program runs the real function, then appends the result back into `messages` as a `role: "tool"` message and sends a second request, from which the model produces the final answer.

## 3. Call flow

1. Client sends the request with `tools` declared
2. Model returns `tool_calls`
3. Client executes the corresponding function and gets a result
4. Client sends the result back as a `tool` message and requests again
5. Model combines the result and outputs the final answer

> Tool-calling support varies by model — choose one that supports Function Calling.
