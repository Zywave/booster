---
layout: documentation
title: API Client
subtitle: Communicating with Zywave's public APIs, consistently
---
The Application Framework offers a small library that helps with calling [Zywave's public APIs](https://api.zywave.com/docs/). If you're using the [API Proxy Element](/application-framework/components/api-proxy/), authorization headers will be applied for you instead!

**Note:** All code examples on this page assume you are loading the Application Framework from the @zywave/zywave-api-toolkit-bundle. This client is also offered via npm/yarn should you so desire at [@zywave/zywave-api-client](https://www.npmjs.com/package/@zywave/zywave-api-client).

## Fetch

`ZywaveApiClient` has a single method on it: `fetch`. This method is a passthrough to [the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and supports all parameters. It will return a [`Promise<Response>`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to be used as needed.

## Creating a ZywaveApiClient

There are two ways to create a `ZywaveApiClient`:

1. Implicit authorization via the API Proxy Element
2. Explicit authorization with proper authorization headers

### With API Proxy Element

The Zywave API Client will look for `<zywave-api-proxy>` on your page.

```javascript
// there are configuration options available; by passing no options, the client will assume
// that you want to use the proxy element. This element MUST be attached to the DOM _before_ executing this code
const client = new window.zywave.ZywaveApiClient();
const accountId = 12345;
// ZywaveApiClient.prototype.fetch works _just_ like window.fetch, except you can also pass it a URL object for the first parameter
const response = await client.fetch(`accounts/v2.0/account/${accountId}`, {
  /* optional RequestInit, like headers */
});

const account = await response.json();
```

### Without API Proxy Element

```javascript
const client = new window.zywave.ZywaveApiClient({
  apiBaseUrl: "https://api.zywave.com", // required
  // one of the following options is required
  bearerToken: "", /* option 1 */
  profileToken: "" /* option 2 */
});

const accountId = 12345;
const response = await client.fetch(`accounts/v2.0/account/${accountId}`);

const account = await response.json();
```