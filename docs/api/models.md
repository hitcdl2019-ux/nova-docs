# 模型列表

`GET /v1/models` —— 查询当前账号可调用的模型。

## 请求示例

```bash
curl https://api.novaapis.com/v1/models \
  -H "Authorization: Bearer $NOVA_API_KEY"
```

## 说明

- 返回结果为 OpenAI 兼容的模型列表结构。
- 可用模型、上下文长度、价格与限额会随上游调整而变化。
- 完整模型与定价请以 [主站模型中心](https://api.novaapis.com/pricing) 为准。
