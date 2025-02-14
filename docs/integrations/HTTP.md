
# HTTP | Comify docs

The HTTP integration provides a universal interaction layer with an actual HTTP client solution.

## Implementations

Currently, there is only one implementation:

* **Fetch** - Node.js fetch implementation.

## Configuration

The used implementation needs to be configured in the `.env` file.

```env
HTTP_IMPLEMENTATION="fetch"
```

## How to use

An instance of the configured HTTP client implementation can be imported for performing HTTP operations.

```ts
import httpClient from '^/integrations/http';

// Perform operations with the httpClient instance
```

### Operations

```ts
import httpClient, { HTTP_METHODS } from '^/integrations/http';

// Set a cached response
const response: Response = new Response();
httpClient.setCache(HTTP_METHODS.GET, url, response);

// Get a cached response
const response: Response | undefined = httpClient.getCache(HTTP_METHODS.GET, url);

// Remove a cached response
httpClient.removeCache(method: string, url: string)

// Clear all cache
httpClient.clearCache()

// Perform a GET request
const response: Response = await httpClient.get(url);

// Perform a GET request with optional headers
const headers: Record<string, string> = { 'Accept': 'application/json' };
const response: Response = await httpClient.get(url, headers);

// Perform a POST request with optional headers
const headers: Record<string, string> = { 'Content-Type': 'application/json' };
const response: Response = await httpClient.post(url, data, headers);

// Perform a PUT request with optional headers
const headers: Record<string, string> = { 'Content-Type': 'application/json' };
const response: Response = await httpClient.put(url, data, headers);

// Perform a PATCH request with optional headers
const headers: Record<string, string> = { 'Content-Type': 'application/json' };
const response: Response = await httpClient.patch(url, data, headers);

// Perform a DELETE request with optional headers
const headers: Record<string, string> = { };
const response: Response = await httpClient.delete(url, headers);

// Perform a HEAD request with optional headers
const headers: Record<string, string> = { };
const response: Response = await httpClient.head(url, headers);
```

### Response model

The result of every request is a standard [ECMAScript Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

### Caching mechanism

All requests are cached by URL. To prevent this behavior, the cache for the URL must be deleted before performing the request.
