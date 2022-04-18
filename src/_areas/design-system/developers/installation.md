---
layout: documentation
title: Installation
---

## Get started with our design system!

Gain access to the Booster Design System—commonly known as the Zywave User Interface (ZUI)—components and stylesheets without having to install a single package.

<docs-spacer size="small"></docs-spacer>

### Determine if your application requires stable third-party components

- If yes, get the most recent **stable** versions here:
  - Booster Design System (ZUI) bundle: [https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/)
  - Booster Application Framework (ZAPI) bundle: [https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/)
- If no, get the most recent **pre-released** versions here:
  - Booster Design System (ZUI) bundle: [https://cdn.zywave.com/@zywave/zui-bundle@next/dist/](https://cdn.zywave.com/@zywave/zui-bundle@next/dist/)
  - Booster Application Framework (ZAPI) bundle: [https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/](https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/)

<docs-spacer size="small"></docs-spacer>

### Required files
There are **three required files** in order for the Booster Design System bundle to work properly in every application:
1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for non-SPAs
1. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
1. `bundle.js`* - required to load **most** ZUI components** properly

```html
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.fouc.css" />
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.app.css" />
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/bundle.js"></script>
```

<docs-spacer size="small"></docs-spacer>

<docs-note><strong>*</strong> The `bundle.js` file is delivered as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and must be loaded from other ES modules, e.g. `<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>`.
<strong>**</strong> There are some exceptions to what components are part of the ZUI bundle. For example, `<zui-table>` must be embedded separately. [Learn more by visiting the Tables documentation.](/design-system/components/tables/)</docs-note>

<docs-spacer size="small"></docs-spacer>

### Install via CDN

```html
<!doctype html>
<html>
  <head>
    <title>Installation | Booster Development Network</title>

    <!-- These two stylesheets should always be listed before all other application styles -->
    <!-- Make sure `zui-bundle.fouc.css` is always listed first to counter FOUC -->
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.fouc.css" />
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/css/zui-bundle.app.css" />

    <script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@{latest|next}/dist/bundle.js"></script>
  </head>
  <body>
    <!-- your content here -->
  <body>
</html>
```

<docs-spacer size="small"></docs-spacer>

### Install via Yarn/NPM

If you want an à la carte experience, you can install individual ZUI component packages via Yarn or NPM.

The following works with no extra work:
```shell
> yarn add @zywave/zui-components-all
```

<br>

```shell
> npm install @zywave/zui-components-all
```

<docs-spacer></docs-spacer>

## Where do I find a list of released packages to install?

- Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
- Check out our [Booster Design System monorepo](https://gitlab.com/zywave/devkit/web-sdk/zui) for all available packages

<docs-spacer></docs-spacer>

## @latest and @next tags

You may have noticed in the code snippets above something like `@latest`

These terms correspond to [npm distribution tags](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag), where `latest` is stable, production-ready code, and `next` is generally unstable and not suitable to be referenced in a live environment.

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