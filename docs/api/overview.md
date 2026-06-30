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
| `POST /v1/images/generations` | 图像生成 |
| `GET  /v1/models` | 查询可用模型列表 |

## 鉴权

所有请求需在请求头携带密钥，详见[快速开始](/start/quickstart)：

```http
Authorization: Bearer YOUR_API_KEY
```

## 各接口文档

- [对话补全](/api/chat)
- [图像生成](/api/images)
- [模型列表](/api/models)
