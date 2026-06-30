# Agent & Tools Overview

NovaAPI is compatible with OpenAI's tool-calling (Function Calling / Tools) protocol, so it can serve as the model backend for various agent frameworks and let the model call the tools you define.

## Use cases

- Let the model call external tools: weather, databases, ordering, knowledge retrieval, etc.
- Integrate with LangChain, LlamaIndex, AutoGen, and other agent frameworks
- Build multi-step reasoning and tool-orchestration agents

## Integration points

1. Connect the OpenAI-compatible way: point `base_url` at `https://api.novaapis.com/v1`
2. Choose a model that supports tool calling (see [Models](/en/api/models))
3. Declare `tools` in the request and handle the model's `tool_calls`

## Navigation

- [Function Calling](/en/agent/function-calling): declaring tools and the call flow
- [Framework Integration](/en/agent/frameworks): configuring common agent frameworks
