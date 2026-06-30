# 鉴权

NovaAPI 通过 API Key 进行鉴权。所有请求都需要在请求头中携带密钥。

## 请求头格式

```http
Authorization: Bearer YOUR_API_KEY
```

## 获取与管理密钥

1. 登录 [NovaAPI 主站](https://api.novaapis.com/)
2. 进入控制台 → 令牌 / API Key 管理
3. 创建、查看、禁用或轮换密钥

## 安全建议

- 不要将密钥硬编码在前端代码或公开仓库中
- 通过环境变量注入密钥，例如 `NOVA_API_KEY`
- 发现密钥泄露时，立即在控制台禁用并重新生成
- 为不同用途创建独立密钥，便于追踪用量与限额
