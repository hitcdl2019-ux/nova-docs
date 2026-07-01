# Hermes 接入

[Hermes](https://github.com/nousresearch/hermes-agent)（Nous Research 出品的 Hermes Agent）兼容 OpenAI 接口，把 NovaAPI 作为自定义接口加入、密钥换成 NovaAPI Key 即可。本文从零开始，覆盖 Windows / macOS / Linux。

## 环境要求

- 操作系统：Windows 10+（PowerShell）/ macOS / Linux（也支持 WSL2）
- NovaAPI 控制台生成的 API Key（以 `sk-` 开头）

> 无需手动装 Node.js/Python——Hermes 安装脚本会自带运行时（uv、Python 3.11、Node.js、ripgrep、ffmpeg），缺什么装什么。

---

## 一、安装 Hermes

官方安装脚本会自动识别系统并拉取所需运行时。

### macOS / Linux / WSL2

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

完成后重新加载 shell，让 `hermes` 进入 PATH：

```bash
source ~/.bashrc      # 或：source ~/.zshrc
```

### Windows（PowerShell）

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

装完后重开终端。

验证：

```bash
hermes --version
```

---

## 二、配置指向 NovaAPI

NovaAPI 是 OpenAI 兼容接口，有两种配置方式。

### 方式 A —— 交互式（推荐）

```bash
hermes model
```

选择 **"Custom endpoint (self-hosted / VLLM / etc.)"**，然后依次输入：

- 接口地址（API base URL）：`https://api.novaapis.com/v1`
- 密钥（API key）：你的 `sk-...` NovaAPI Key
- 模型名（Model name）：[模型列表](/api/models)中任一支持工具调用的模型

所选配置会写入 `~/.hermes/config.yaml`。

### 方式 B —— 手动编辑配置

在 `~/.hermes/config.yaml` 中把 NovaAPI 作为命名的自定义服务商加入，并把密钥放到 `~/.hermes/.env`：

```yaml
# ~/.hermes/config.yaml
custom_providers:
  - name: novaapi
    base_url: https://api.novaapis.com/v1
    key_env: NOVA_API_KEY

model:
  default: gpt-5            # 任一支持工具调用的模型
  provider:
    custom: novaapi
```

```bash
# ~/.hermes/.env
NOVA_API_KEY=sk-你的NovaAPIKey
```

- `base_url`：NovaAPI 的 OpenAI 兼容接口地址
- `key_env`：`.env` 中存放密钥的环境变量名
- `model.provider.custom`：上面定义的自定义服务商名

> `config.yaml` 是模型、服务商、接口地址的唯一权威来源。

---

## 三、运行

```bash
hermes
```

会话中可用 `/model` 切换模型，或重新执行 `hermes model` 重新配置。若服务商无法识别，可运行 `hermes doctor` 排查。
