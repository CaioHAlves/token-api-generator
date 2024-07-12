This API allows you to generate tokens using the /token/create endpoint.

# Base URL

```bash
https://token-api-generator.onrender.com
```

# Endpoint

## Create Token
```bash
POST /token/create
```

# Example Body Request
```js
{
    "name": "John Doe",
    "age": 25
}
```
# Query Parameters
- expires: Specifies the expiration time of the token. It can be defined in human-readable form (e.g., '8h') or in milliseconds (e.g., 1000 * 60 * 60).
    - Example: '8h' or 1000 * 60 * 60
- secret: The secret key used for token generation.
    - Example: '@teste'

# Example Request
```shell
curl -X POST "https://token-api-generator.onrender.com/token/create?expires=8h&secret=@teste" \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "age": 25}'
```

# Example Response
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```