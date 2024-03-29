---
layout: documentation
title: Installation
---
## Get started with our design system!

Gain access to the Booster Design System—commonly known as the Zywave User Interface (ZUI)—components and stylesheets without having to install a single package.

<docs-spacer size="small"></docs-spacer>

### Determine if your application requires stable third-party components

* If yes, get the most recent **stable** versions here:

  * Booster Design System (ZUI) bundle: <https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/>
  * Booster Application Framework (ZAPI) bundle: <https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/>
* If no, get the most recent **pre-released** versions here:

  * Booster Design System (ZUI) bundle: <https://cdn.zywave.com/@zywave/zui-bundle@next/dist/>
  * Booster Application Framework (ZAPI) bundle: <https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/>

<docs-spacer size="small"></docs-spacer>

### Required files

There are **three required files** in order for the Booster Design System bundle to work properly in every application:

1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for non-SPAs
2. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
3. `bundle.js`* - required to load **most** ZUI components\*\* properly

```html
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/css/zui-bundle.fouc.css" />
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/css/zui-bundle.app.css" />
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>
```

<docs-spacer size="small"></docs-spacer>

<docs-note><strong>*</strong> The `bundle.js` file is delivered as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and must be loaded from other ES modules, such as `<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>`.
<strong>\*\*</strong> There are some exceptions to what components are part of the ZUI bundle. For example, `<zui-table>` must be embedded separately. [Learn more by visiting the Tables documentation.](/design-system/components/tables/)</docs-note>

<docs-spacer></docs-spacer>

## Installation

We offer a bundle with all of the core componentry for the Booster Design System, which includes [ZUI Buttons](/design-system/components/buttons/), [ZUI Icons](/design-system/components/icons/), [ZUI color palette](/design-system/visuals/colors/), etc. This bundle is delivered as an [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), and only works in modern browsers.

By loading the bundle via a CDN that can resolve npm tags, we can push fixes/enhancements to your application without any deployment on your end.

Here's an example of how to load the bundle with the necessary stylesheets and script:

```html
<!doctype html>
<html>
  <head>
    <title>Installation | Booster Development Network</title>

    <!-- These two stylesheets should always be listed before all other application styles -->
    <!-- Make sure `zui-bundle.fouc.css` is always listed first to counter FOUC -->
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/css/zui-bundle.fouc.css" />
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/css/zui-bundle.app.css" />

    <script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>
  </head>
  <body>
    <!-- your content here -->
  <body>
</html>
```

<docs-spacer></docs-spacer>

## Where do I find a list of released packages to install?

* Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
* Check out our [Booster Design System monorepo](https://gitlab.com/zywave/devkit/web-sdk/zui) for all available packages

<docs-spacer></docs-spacer>

## @latest and @next tags

You may have noticed `@latest` and `@next` in the code snippets and links above.

They are tags that correspond to [npm distribution tags](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag), where `latest` is stable, production-ready code, and `next` is generally unstable and not suitable to be referenced in a live environment.

These dist tags gives the toolkit the ability to deploy updates and fixes to your application, without you having to lift a finger!

Choose the right tag for your situation, and update accordingly (e.g., `https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js`).

<docs-spacer></docs-spacer>

## Version numbers

In addition to dist tags, you can use any valid npm version as found here.

This can be generally useful when a critical issue is encountered, or a deprecation notice goes unheeded.

A versioned URL could look something like the following:

```
https://cdn.zywave.com/@zywave/zui-bundle@1.0.22/dist/bundle.js
```

<docs-spacer></docs-spacer>

## Debugging components

We've added unminified JS files for easier debugging since our bundles are very aggressively minified for production, making it very difficult to debug our components. Not only will you be able to debug all Booster components with less effort moving forward, you also get the added benefit of Lit dev logging with extra runtime warnings.

All development build (unminified) files are located in the `/dev/` folder instead of the `/dist/` of each bundle:

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dev/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dev/components/table.js"></script>
```

<docs-spacer size="small"></docs-spacer>

### Can I use the development bundles in lower environments for my apps?

We strongly encourage you to do so! However, please don't use them in production since they will reduce your app's performance to end users.