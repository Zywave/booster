---
layout: documentation
title: Installing packages
---

Part of making utilization of Booster components effortless is packaging our components into two bundles that you can quickly embed in your application. The recommended way to use our components is to embed the bundles via the Zywave CDN, but you can also install them via Yarn or NPM for a more à la carte experience.

Another advantage to loading these bundles via a CDN that can resolve npm tags is it allows us to push fixes/enhancements to your application without any deployment on your end.

<docs-spacer size="small"></docs-spacer>

<docs-note>All bundles are distributed as standard [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and only work in modern browsers. You must deliver or package these accordingly.</docs-note>

<docs-spacer></docs-spacer>

## Determine if your application requires stable third-party components

- If yes, get the most recent **stable** versions here:
  - Booster Design System (ZUI) bundle: [https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/)
  - Booster Application Framework (ZAPI) bundle: [https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/)
- If no, get the most recent **pre-released** versions here:
  - Booster Design System (ZUI) bundle: [https://cdn.zywave.com/@zywave/zui-bundle@next/dist/](https://cdn.zywave.com/@zywave/zui-bundle@next/dist/)
  - Booster Application Framework (ZAPI) bundle: [https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/](https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/)

<docs-spacer></docs-spacer>

## Booster Design System (ZUI) bundle

Gain access to the Booster Design System&mdash;commonly known as the Zywave User Interface (ZUI)&mdash;components and stylesheets without having to install a single package.

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
    <title>Installing packages | Booster Development Network</title>

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

## Booster Application Framework (ZAPI) bundle

We also offer a bundle with all of the core componentry for the Booster Applicaton Framework&mdash;commonly known as the Zywave API Toolkit (ZAPI)&mdash;which includes the [Zywave Shell](/application-framework/components/shell/), the [API proxy](/application-framework/components/api-proxy/), and more.

<docs-spacer size="small"></docs-spacer>

### Required files

There are **four required files** in order for the Booster Application Framework bundle to work propertly in every application:
1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for Internet Explorer 11
1. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
1. zui-bundle's `bundle.js`* - required to load **most** ZUI components properly
1. zywave-api-toolkit-bundle's `bundle.js`* - required to load **all** ZAPI components properly

```html
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@{latest|next}/dist/bundle.js"></script>
```

<docs-spacer size="small"></docs-spacer>

<docs-note>* Both `bundle.js` files are delivered as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and must be loaded from other ES modules, e.g. `<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>`<br>
** There are some exceptions to what components are part of the ZUI bundle. For example, `<zui-table>` must be embedded separately. [Learn more by visiting the Tables documentation.](/design-system/components/tables/)</docs-note>

<docs-spacer size="small"></docs-spacer>

### Install via CDN

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

<docs-spacer size="small"></docs-spacer>

### Install via Yarn/NPM

If you want an à la carte experience, you can install individual component packages via Yarn or NPM.

The following works with no extra work:
```shell
> yarn add @zywave/zui-components-all
> yarn add @zywave/zywave-components-all
```

<br>

```shell
> npm install @zywave/zui-components-all
> npm install @zywave/zywave-components-all
```

<docs-spacer></docs-spacer>

## Where do I find a list of released packages to install?

- Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
- Check out our [Booster Design System monorepo](https://gitlab.com/zywave/devkit/web-sdk/zui) and [Booster Application Framework monorepo](https://gitlab.com/zywave/devkit/web-sdk/zywave-api-toolkit) for all available packages

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
https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@1.0.22/dist/bundle.js
```