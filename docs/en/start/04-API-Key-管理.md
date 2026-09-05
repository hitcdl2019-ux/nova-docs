# 04 - API Key Management

An API key authenticates requests to NovaAPI. Store every key securely.

## Creating an API key

1. Sign in to the console.
2. Open the API key management page.
3. Select **Create API Key**.
4. Configure its name, permissions, and quota.
5. Copy and securely store the key immediately after creation.

## Field descriptions

## Security recommendations

- Never put an API key in frontend code.
- Never commit an API key to GitHub, Gitee, or another public repository.
- Never expose a complete API key in screenshots, chats, or support tickets.
- Use different keys for production and testing.
- Rotate keys regularly.

## Environment variables

We recommend storing credentials in environment variables.

### macOS / Linux

```bash
export NOVAAPI_API_KEY="YOUR_API_KEY"
export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"
```

To persist these values, add them to your shell configuration file.

For Zsh:

```bash
echo 'export NOVAAPI_API_KEY="YOUR_API_KEY"' >> ~/.zshrc
echo 'export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"' >> ~/.zshrc
source ~/.zshrc
```

For Bash:

```bash
echo 'export NOVAAPI_API_KEY="YOUR_API_KEY"' >> ~/.bashrc
echo 'export NOVAAPI_BASE_URL="https://api.novaapis.com/v1"' >> ~/.bashrc
source ~/.bashrc
```

### Windows PowerShell

```powershell
[Environment]::SetEnvironmentVariable("NOVAAPI_API_KEY", "YOUR_API_KEY", "User")
[Environment]::SetEnvironmentVariable("NOVAAPI_BASE_URL", "https://api.novaapis.com/v1", "User")
```

Open a new terminal for the changes to take effect.

## Deleting or disabling an API key

Delete or disable keys that are no longer needed. A deleted key stops working immediately. Historical billing records are retained, while request logs are not retained.

## Responding to an exposed key

1. Immediately delete or disable the exposed key.
2. Create a replacement key.
3. Replace the old key in applications, servers, CI/CD systems, and agent tools.
4. Review recent usage and bills.
5. Contact [contact@novaapis.com](mailto:contact@novaapis.com) if you need assistance.
