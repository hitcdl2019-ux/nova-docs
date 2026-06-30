# Error Codes

NovaAPI follows standard HTTP status codes, with error details in the response body.

## Common status codes

| Status | Meaning | Suggestion |
| --- | --- | --- |
| `400` | Bad request | Check JSON format and required fields |
| `401` | Auth failed | Missing or invalid key, check the `Authorization` header |
| `403` | Forbidden | Key lacks permission for that model/resource |
| `404` | Not found | Check the endpoint path and model name |
| `429` | Rate limited | Lower concurrency or retry later |
| `5xx` | Upstream / gateway error | Retry; if persistent, contact support |

## Error response example

```json
{
  "error": {
    "message": "Invalid API key",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

If you can't resolve it, [contact us](/en/support/contact) with the request time, model name, and error message.
