---
layout: documentation
title: Installation
subtitle: Get started with our application framework!
---
The Zywave API Toolkit is offered in a variety of ways; all components (including the bundle) are available via the npm registry, meaning you're just an `npm install` or `yarn add` away.

However, the most common (and recommended) way of installing the toolkit is via a CDN that can resolve npm tags and versions. Zywave offers that service via [the Zywave CDN](https://cdn.zywave.com).

## Installing the bundle via CDN

The Zywave API toolkit offers a bundle with all of the core componentry for the Zywave API Toolkit, including [Zywave Shell](/application-framework/components/shell/), the [API proxy](/application-framework/components/api-proxy/), etc. This bundle is delivered as an [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), and only works in modern browsers.

By loading the bundle via a CDN that can resolve npm tags, we can push fixes/enhancements to your application without any deploy on your end. 

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle/@{latest|next}/dist/bundle.js></script>
```

## API Proxy Element

The Zywave API Toolkit, as its name might suggest, communicates with Zywave's own APIs via client-side JavaScript. Because of distrust when it comes to client-side authentication, we offer an API Proxy element. This element *must* be the first element on the page within your `<body>` and requires an `api-base-url` be supplied to ensure it is pointing at the proper host.

**Note:** the API proxy element can only be used by a Zywave SSO'd user and at a *.zywave.com subdomain. If this doesn't apply to you, then you will be required to provide a `profile-token` or `bearer-token` to all Zywave API Toolkit components. 

For more information on the API Proxy Element, click \[here](/application-framework/components/api-proxy/).