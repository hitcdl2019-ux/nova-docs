# Claude Code

[Claude Code](https://docs.claude.com/claude-code) is Anthropic's official command-line coding agent, using the Anthropic Messages protocol. NovaAPI is compatible with this protocol — just point the endpoint at NovaAPI.

## 1. Install

```bash
npm install -g @anthropic-ai/claude-code
```

## 2. Set environment variables

```bash
export ANTHROPIC_BASE_URL="https://api.novaapis.com"
export ANTHROPIC_AUTH_TOKEN="sk-your-NovaAPI-key"
```

> Set `ANTHROPIC_BASE_URL` to the domain only — **do not** append `/v1`. Claude Code adds `/v1/messages` automatically.

## 3. Pick models (optional)

```bash
export ANTHROPIC_MODEL="claude-sonnet-4-5"
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-4-5"
```

Use the model names actually offered by NovaAPI; see the [model list](/en/api/models).

## 4. Run

```bash
claude
```

## Persistent config (optional)

You can also write to `~/.claude/settings.json` to avoid exporting variables each time:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.novaapis.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-NovaAPI-key",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5"
  }
}
```
