---
title: API proxy
subtitle: Defines a keep-alive iframe for the Zywave API proxy.
api: https://cdn.zywave.com/@zywave/zywave-api-proxy@next/dist/custom-elements.json
demo: https://cdn.zywave.com/@zywave/zywave-api-proxy@next/demo/index.html
mainComponentName: zywave-api-proxy
includedElements: []
---

## General

The `ZywaveApiProxyElement` enables easier, more secure client-side API communication. It also makes the utilization of all Application Framework components simpler, enabling you to focus on what matters.

## Requirements

Before considering to use this component, ensure the following:

1. Applications consuming this component are currently required to be on a *.zywave.com. This is due to continual restrictions being made, or already made, to third party cookies. For more information:

   1. Chrome's announcement of the deprecation of third party cookies: <https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html>
   2. Chrome's timeline to deprecation: <https://privacysandbox.com/timeline/>
2. The proxy must only be used by users who are authenticated with Zywave. If your application serves a distinct user base, the proxy must only be served to users authenticated via Zywave SSO.
3. It is highly encouraged to supply a profile-token value to this component, which represents the active profile of the user in your own application to provide that context to the Proxy application.

   1. If being used by a user other than an agency user, and profile context matters, this attribute is **required**