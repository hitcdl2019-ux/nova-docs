# 04\-API\-Key\-管理

API Key 是调用 NovaAPI 接口的身份凭证。请妥善保管 API Key。

## 创建 API Key

操作步骤：

1. 登录控制台

2. 进入 API Key 管理页

3. 点击创建 API Key

4. 填写名称、权限、额度等信息

5. 创建后立即复制并保存 API Key

## 字段说明

## 安全建议

- 不要把 API Key 写进前端代码。

- 不要把 API Key 提交到 GitHub、Gitee 或其他公开仓库。

- 不要在截图、聊天记录、工单中直接暴露完整 API Key。

- 生产环境和测试环境使用不同 API Key。

- 定期轮换 API Key。

## 环境变量配置

推荐将 API Key 配置到环境变量中。

### macOS / Linux

```Bash
export NOVAAPI_API_KEY="sk-xxxxx"
export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"
```

如需长期生效，可写入 Shell 配置文件。

Zsh：

```Bash
echo 'export NOVAAPI_API_KEY="sk-xxxxx"' >> ~/.zshrc
echo 'export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"' >> ~/.zshrc
source ~/.zshrc
```

Bash：

```Bash
echo 'export NOVAAPI_API_KEY="sk-xxxxx"' >> ~/.bashrc
echo 'export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"' >> ~/.bashrc
source ~/.bashrc
```

### Windows PowerShell

```PowerShell
[Environment]::SetEnvironmentVariable("NOVAAPI_API_KEY", "sk-xxxxx", "User")[Environment]::SetEnvironmentVariable("NOVAAPI_BASE_URL", "https://api.novaapis.com/v1", "User")
```

重新打开终端后生效。

## 删除或禁用 API Key

如果某个 API Key 不再使用，建议删除或禁用。删除后：

- 是否立即失效：是，请确认不再使用该API Key后删除，以免影响您的正常业务；

- 历史账单是否保留：保留

- 请求日志是否保留：不保留

## API Key 泄露处理

1. 立即删除或禁用泄露的 API Key

2. 创建新的 API Key

3. 替换应用、服务器、CI/CD、Agent 工具中的旧 Key

4. 检查近期用量和账单

5. 联系支持：contact@novaapis\.com

