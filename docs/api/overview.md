# API 概览

NovaAPI 提供与 OpenAI 兼容的 RESTful 接口，将 `base_url` 指向 NovaAPI 即可调用 40+ 上游模型。

## 基础地址

```
https://api.novaapis.com/v1
```

## 常用端点

| 端点 | 说明 |
| --- | --- |
| `POST /v1/chat/completions` | 对话补全（主流文本模型） |
| `POST /v1/embeddings` | 文本向量化 |
| `POST /v1/images/generations` | 图像生成 |
| `GET  /v1/models` | 查询可用模型列表 |

## 请求示例

```bash
curl https://api.novaapis.com/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{ "role": "user", "content": "Hello" }]
  }'
```

## 错误处理

接口遵循标准 HTTP 状态码：

- `401` 鉴权失败（密钥缺失或无效）
- `429` 触发速率限制
- `5xx` 上游或网关错误

> 提示：具体可用模型、价格与限额请以 [主站模型中心](https://api.novaapis.com/pricing) 为准。
