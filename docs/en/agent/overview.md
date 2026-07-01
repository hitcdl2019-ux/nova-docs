# Agent & Tools Overview

NovaAPI is compatible with both the **OpenAI** and **Anthropic** API protocols, so it can serve as the model backend for coding agents and Agent frameworks alike. Whether you use a command-line coding assistant or build your own tool-orchestration app, just point the endpoint at NovaAPI to call any provider's models with a single balance.

## 1. Coding Agent CLIs

Point a command-line agent's endpoint at NovaAPI for unified billing and free model switching:

- [Claude Code](/en/agent/claude-code): Anthropic protocol, set `ANTHROPIC_BASE_URL`
- [Codex](/en/agent/codex): OpenAI protocol, edit `~/.codex/config.toml`
- [OpenClaw](/en/agent/openclaw): OpenAI-compatible, set `base_url`
- [Hermes](/en/agent/hermes): OpenAI-compatible, set `base_url`

## 2. Function Calling & Frameworks

- [Function Calling](/en/agent/function-calling): declaring `tools` and the call flow
- [Framework Integration](/en/agent/frameworks): LangChain, LlamaIndex, and more

## General Notes

1. **OpenAI protocol**: set `base_url` to `https://api.novaapis.com/v1`
2. **Anthropic protocol**: set `ANTHROPIC_BASE_URL` to `https://api.novaapis.com` (no `/v1`)
3. **Key**: use the Key generated in the NovaAPI console (starts with `sk-`)
4. **Model**: choose a model that supports tool calling; see the [model list](/en/api/models) for exact names
