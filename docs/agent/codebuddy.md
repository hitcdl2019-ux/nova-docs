# WorkBuddy / CodeBuddy 接入

[WorkBuddy / CodeBuddy](https://www.codebuddy.ai) 是腾讯云出品的 AI Agent 与编程助手工具。它支持通过本地模型配置文件添加**自定义模型**，可用 OpenAI 兼容的 Chat Completions 接口接入 NovaAPI。

## 一、安装并登录

- 从官网下载安装 WorkBuddy / CodeBuddy 桌面版，或安装命令行版（CodeBuddy Code CLI）：

  ```bash
  npm install -g @tencent-ai/codebuddy-code
  ```

- 首次启动按提示完成登录。
- **至少打开一次项目目录**，让应用创建本地配置目录（`.codebuddy`）。
- 前往 NovaAPI 控制台获取 API Key（以 `sk-` 开头）。

## 二、配置本地模型

创建或编辑**用户级**配置文件：

- Windows：`C:\Users\<你的用户名>\.codebuddy\models.json`
- macOS / Linux：`~/.codebuddy/models.json`

如果只想让配置对某个项目生效，也可以创建**项目级**配置文件：`<你的项目>/.codebuddy/models.json`。

先把 NovaAPI Key 设为环境变量：

```powershell
# Windows PowerShell（永久，重开终端生效）
setx NOVA_API_KEY "sk-你的NovaAPIKey"
```

```bash
# macOS / Linux
export NOVA_API_KEY="sk-你的NovaAPIKey"
```

然后写入以下配置：

```json
{
  "models": [
    {
      "id": "gpt-5",
      "name": "GPT-5",
      "vendor": "NovaAPI",
      "url": "https://api.novaapis.com/v1/chat/completions",
      "apiKey": "${NOVA_API_KEY}",
      "maxInputTokens": 128000,
      "maxOutputTokens": 8192,
      "supportsToolCall": true,
      "supportsImages": false
    }
  ],
  "availableModels": ["gpt-5"]
}
```

- `url`：填 NovaAPI 的 OpenAI 兼容接口地址，需带完整路径 `/v1/chat/completions`
- `apiKey`：`${NOVA_API_KEY}` 表示从环境变量读取（也可直接填 `sk-...`）
- `id` / `name`：模型 ID 与显示名，`id` 以[模型列表](/api/models)为准，可添加多条
- `supportsToolCall`：选择支持工具调用的模型时置为 `true`

> 请将 `models.json` 保存为 **UTF-8 无 BOM**。部分桌面版本读取带 BOM 的 JSON 会导致本地模型配置加载失败。

## 三、重启并选择模型

完全退出 WorkBuddy / CodeBuddy 后重新打开，在模型选择器中选择你配置的模型（如 **GPT-5**）。

## 四、可选：验证 API Key

```powershell
# Windows PowerShell
$env:NOVA_API_KEY="sk-你的NovaAPIKey"
curl https://api.novaapis.com/v1/chat/completions `
  -H "Content-Type: application/json" `
  -H "Authorization: Bearer $env:NOVA_API_KEY" `
  -d '{"model":"gpt-5","messages":[{"role":"user","content":"hi"}],"stream":false}'
```

```bash
# macOS / Linux
curl https://api.novaapis.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -d '{"model":"gpt-5","messages":[{"role":"user","content":"hi"}],"stream":false}'
```

请求成功即说明 API Key 与模型名可用。

## 常见问题

- **鉴权失败 / 401**：检查 `apiKey` 是否为真实 NovaAPI Key，不要把接口 URL 填进 API Key 字段。
- **未找到模型 / 404**：检查模型 `id` 是否与[模型列表](/api/models)中一致。
- **读取本地模型配置失败**：检查 `models.json` 是否为合法 JSON，并保存为 UTF-8 无 BOM。
- **模型选择器中不显示**：完全重启应用，并确认文件位于 `.codebuddy/models.json`。
- **UI 中直接显示 `${NOVA_API_KEY}`**：请从已设置该环境变量的终端重启应用；若桌面端仍不展开，可在 UI 或 `models.json` 中直接填入真实 API Key。
