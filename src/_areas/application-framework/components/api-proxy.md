---
title: Zywave API Proxy
subtitle: Enables easier, more secure client-side communication with Zywave APIs
api: https://cdn.zywave.com/@zywave/zywave-api-proxy@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-api-proxy@latest/docs/demo.html
mainComponentName: zywave-api-proxy
includedElements: []
---

## General

Zywave API Proxy defines a keep-alive iframe for easier and more secure client-side communications with the Zywave API proxy. It also makes the utilization of all Application Framework components (e.g., `<zywave-analytics>` and `<zywave-shell>`) simpler, enabling you to focus on what matters.

<docs-spacer></docs-spacer>

## When do I use Zywave API Proxy?

Zywave API Proxy is required to communicate with Zywave APIs, such as to provide the correct context for users with different permissions.

<docs-spacer></docs-spacer>

## What are the minimum requirements to use Zywave API Proxy?

If you meet the minimum requirements below, please include Zywave API Proxy in your application for secure, client-side API communication:

1. Your application is hosted on a *.zywave.com domain
1. Your application is authenticated with Zywave Auth

<docs-note>If you're using Zywave Shell in your application, you must include Zywave API Proxy.</docs-note>

<docs-spacer></docs-spacer>

## Frequently asked questions

### Do I have to include Zywave API Proxy when I use Zywave Shell in my application?

Yes, you must include `<zywave-api-proxy>` in addition to `<zywave-shell>` because `<zywave-shell>` cannot communicate with Zywave APIs by itself.

<docs-spacer size="small"></docs-spacer>

### Why does my application need to be hosted on a *.zywave.com domain?

Applications consuming this component are currently required to be on a *.zywave.com due to continual restrictions being made, or already made, to third-party cookies.

For more information:
* [Chrome's announcement of the deprecation of third-party cookies](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html)
* [Chrome's timeline to deprecate third-party cookies](https://privacysandbox.com/timeline/)

<docs-spacer size="small"></docs-spacer>

### Can I use Zywave API Proxy with any user authentication method?

The proxy must only be used by users who are authenticated with Zywave Auth. If your application provides several user authentication methods, the proxy must only be served to users authenticated via Zywave Single Sign-On.

<docs-spacer size="small"></docs-spacer>

### Do I need to provide a profile token?

In order for your application to identify the user's current active profile, you are highly encouraged to provide a profile token to Zywave API Proxy. The profile token is used to retrieve the user's profile information, as well as provide context for your application.

A profile token is **required** to provide the correct profile context if your application is being used by a user other than an agency user.

<docs-spacer size="small"></docs-spacer>

### Do I need to provide a bearer token?

Providing a client-side bearer token as an alternative to server-side is **not recommended** because any party in possession of the bearer token can exploit it. If you cannot provide a bearer token via server-side, then providing a client-side bearer token as an alternative is acceptable, provided you protect it from disclosure in storage and in transport.

<docs-spacer size="small"></docs-spacer>

### If I provide a profile token, do I still need to provide a bearer token?

A profile token and a bearer token are not mutually exclusive. While a profile token provides the user's current active profile information, a bearer token provides authentication for the user. How you choose to provide a bearer token (server-side or client-side) is up to you, but we recommend server-side.
