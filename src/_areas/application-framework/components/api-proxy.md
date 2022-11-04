---
title: Zywave API Proxy
subtitle: Defines a keep-alive iframe for the Zywave API proxy.
api: https://cdn.zywave.com/@zywave/zywave-api-proxy@latest/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-api-proxy@latest/docs/demo.html
mainComponentName: zywave-api-proxy
includedElements: []
---

## General

Zywave API Proxy enables easier, more secure client-side API communication. It also makes the utilization of all Application Framework components simpler, enabling you to focus on what matters.

<docs-spacer></docs-spacer>

## When do I use Zywave API Proxy?

Still not sure if you need to include it in your application?

If you meet all of these criteria, please include Zywave API Proxy in your application for secure, client-side API communication:

1. Your application is hosted on a *.zywave.com domain
1. Your application is authenticated with Zywave Auth
1. Your application is using [Zywave Shell](/application-framework/components/shell/)
1. You are **not providing** a Zywave bearer token `<zywave-shell bearer-token="">`

<docs-spacer size="small"></docs-spacer>

### Why does my application need to be hosted on a *.zywave.com domain?
Applications consuming this component are currently required to be on a *.zywave.com due to continual restrictions being made, or already made, to third-party cookies.

For more information:
* [Chrome's announcement of the deprecation of third-party cookies](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html)
* [Chrome's timeline to deprecate third-party cookies](https://privacysandbox.com/timeline/)

<docs-spacer size="small"></docs-spacer>

### Can I use Zywave API Proxy with any user authentication method?
The proxy must only be used by users who are authenticated with Zywave Auth. If your application provides several user authentication methods, the proxy must only be served to users authenticated via Zywave SSO.

<docs-spacer></docs-spacer>

## Requirements

Before considering to use this component, ensure the following:

1. Applications consuming this component are currently required to be on a *.zywave.com. This is due to continual restrictions being made, or already made, to third party cookies. For more information:

   1. Chrome's announcement of the deprecation of third party cookies: <https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html>
   2. Chrome's timeline to deprecation: <https://privacysandbox.com/timeline/>
2. The proxy must only be used by users who are authenticated with Zywave. If your application serves a distinct user base, the proxy must only be served to users authenticated via Zywave SSO.
3. It is highly encouraged to supply a profile-token value to this component, which represents the active profile of the user in your own application to provide that context to the Proxy application.

   1. If being used by a user other than an agency user, and profile context matters, this attribute is **required**.