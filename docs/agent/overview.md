# Agent 工具接入概览

NovaAPI 兼容 OpenAI 的工具调用（Function Calling / Tools）协议，可作为各类 Agent 框架的模型后端，让模型自动调用你定义的工具。

## 适用场景

- 让模型调用外部工具：查天气、查数据库、下单、检索知识库等
- 接入 LangChain、LlamaIndex、AutoGen 等 Agent 框架
- 构建多步推理、工具编排的智能体应用

## 接入要点

1. 用 OpenAI 兼容方式连接：`base_url` 指向 `https://api.novaapis.com/v1`
2. 选择支持工具调用的模型（见[模型列表](/api/models)）
3. 在请求中声明 `tools`，处理模型返回的 `tool_calls`

## 文档导航

- [函数调用](/agent/function-calling)：tools 声明与调用流程
- [框架接入](/agent/frameworks)：常见 Agent 框架配置
