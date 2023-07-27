---
layout: documentation
title: Installation
---
## Get started with our application framework!

Gain access to the Booster Application Framework—commonly known as the Zywave API Toolkit (ZAPI)—components without having to install a single package.

<docs-spacer></docs-spacer>

## Determine if your application requires stable third-party components

* If yes, get the most recent **stable** versions here:

  * Booster Design System (ZUI) bundle: <https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/>
  * Booster Application Framework (ZAPI) bundle: <https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/>
* If no, get the most recent **pre-released** versions here:

  * Booster Design System (ZUI) bundle: <https://cdn.zywave.com/@zywave/zui-bundle@next/dist/>
  * Booster Application Framework (ZAPI) bundle: <https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/>

<docs-spacer></docs-spacer>

## Required files

There are **four required files** in order for the Booster Application Framework bundle to work propertly in every application:

1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for non-SPAs
2. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
3. zui-bundle's `bundle.js`* - required to load **most** ZUI components properly
4. zywave-api-toolkit-bundle's `bundle.js`* - required to load **all** ZAPI components properly

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@{latest|next}/dist/bundle.js"></script>
```

<docs-spacer size="small"></docs-spacer>

<docs-note><strong>*</strong> The `bundle.js` file is delivered as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and must be loaded from other ES modules, e.g. `<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>`.
<strong>\*\*</strong> There are some exceptions to what components are part of the ZUI bundle. For example, `<zui-table>` must be embedded separately. [Learn more by visiting the Tables documentation.](/design-system/components/tables/)</docs-note>

<docs-spacer></docs-spacer>

## Installation

The Zywave API toolkit offers a bundle with all of the core componentry for the Zywave API Toolkit, which includes the [Zywave Shell](/application-framework/components/shell/), the [API proxy](/application-framework/components/api-proxy/), etc. This bundle is delivered as an [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), and only works in modern browsers.

By loading the bundle via a CDN that can resolve npm tags, we can push fixes/enhancements to your application without any deployment on your end. 

```html
<!doctype html>
<html>
  <head>
    <title>Installing packages | Booster Development Network</title>

    <!-- These two stylesheets should always be listed before all other application styles -->
    <!-- Make sure `zui-bundle.fouc.css` is always listed first to counter FOUC -->
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.fouc.css" />
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.app.css" />

    <!-- It is required to also load the ZUI bundle and stylesheets above, especially for Zywave Shell usage -->
    <script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/bundle.js"></script>
    <script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@{latest|next}/dist/bundle.js"></script>
  </head>
  <body>
    <!-- your content here -->
  <body>
</html>
```

<docs-spacer></docs-spacer>

## API Proxy Element

The Zywave API Toolkit, as its name might suggest, communicates with Zywave's own APIs via client-side JavaScript. Because of distrust when it comes to client-side authentication, we offer an API Proxy element that communicates API calls through a hosted proxy application, which applies secure headers before sending the request off to the underlying APIs. This element *must* be the first element on the page within your `<body>` and requires an `api-base-url` be supplied to ensure it is pointing at the proper host.

<docs-spacer size="small"></docs-spacer>

<docs-note>The API proxy element can only be used by a user authenticated with Zywave SSO and at a *.zywave.com subdomain. If this doesn't apply to you, then you will be required to provide a `profile-token` or `bearer-token` to all Zywave API Toolkit components. </docs-note>

<docs-spacer size="small"></docs-spacer>

For more information on the API Proxy Element, click [here](/application-framework/components/api-proxy/).

<docs-spacer></docs-spacer>

## Where do I find a list of released packages to install?

* Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
* Check out our [Booster Design System monorepo](https://gitlab.com/zywave/devkit/web-sdk/zui) and [Booster Application Framework monorepo](https://gitlab.com/zywave/devkit/web-sdk/zywave-api-toolkit) for all available packages

<docs-spacer></docs-spacer>

## @latest and @next tags

You may have noticed in that code snippets above the following:\
`@{latest|next}`  

These terms correspond to [npm distribution tags](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag), where `latest` is stable, production-ready code, and `next` is generally unstable and not suitable to be referenced in a live environment.

Choose the right tag for your situation, and update accordingly (e.g., `https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/bundle.js`).

<docs-spacer></docs-spacer>

## Version numbers

In addition to dist tags, you can use any valid npm version as found [here](https://www.npmjs.com/package/@zywave/zywave-api-toolkit-bundle).

This can be generally useful when a critical issue is encountered, or a deprecation notice goes unheeded.

A versioned URL could look something like the following:\
`https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@1.0.22/dist/bundle.js`

<docs-spacer></docs-spacer>

## Debugging

We've added unminified JS files for easier debugging since our bundles are very aggressively minified for production, making it very difficult to debug our components. Not only will you be able to debug all Booster components with less effort moving forward, you also get the added benefit of Lit dev logging with extra runtime warnings.

All development build (unminified) files are located in the `/dev/` folder instead of the `/dist/` of each bundle:

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dev/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dev/components/api-proxy.js"></script>
```

<docs-spacer size="small"></docs-spacer>

### Can I use the development bundles in lower environments for my apps?

We strongly encourage you to do so! However, please don't use them in production since they will reduce your app's performance to end users.