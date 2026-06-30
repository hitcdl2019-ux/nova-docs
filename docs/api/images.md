# 图像生成

`POST /v1/images/generations` —— 文本生成图像，兼容 OpenAI Images 格式。

## 请求示例

```bash
curl https://api.novaapis.com/v1/images/generations \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dall-e-3",
    "prompt": "一只在月球上喝咖啡的猫，赛博朋克风格",
    "n": 1,
    "size": "1024x1024"
  }'
```

## 常用参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `model` | string | 图像模型名称 |
| `prompt` | string | 图像描述提示词 |
| `n` | number | 生成数量 |
| `size` | string | 尺寸，如 `1024x1024` |

> 具体可用的图像模型与尺寸支持，请以[模型列表](/api/models)及主站模型中心为准。
