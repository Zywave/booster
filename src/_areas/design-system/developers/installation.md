---
layout: documentation
title: Installation
subtitle: Get started with our design system!
---

## ZUI bundle via CDN (recommended)

For a plug and chug experience, the ZUI bundle is the perfect solution to quickly get started! Gain access to all of our components, most web components polyfills, and stylesheets without having to install a single package. This is a popular choice among developers when building a new application.

### Determine if your application requires stable third-party components

1. If yes, get the most recent **stable** version here: [https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/)
1. If no, get the most recent **pre-released** version here: [https://cdn.zywave.com/@zywave/zui-bundle@next/dist/](https://cdn.zywave.com/@zywave/zui-bundle@next/dist/)
1. There are three required files in order for the ZUI CDN to work properly in every application
1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for Internet Explorer 11
1. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
1. `bundle.js` - required to load ALL ZUI components properly. This is delivered as an [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and must be loaded from another ES module, e.g. `<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>`

### Place the script and stylesheets in your application

```html
<!doctype html>
<html>
  <head>
    <title>Installation | Zywave User Interface</title>

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

<docs-spacer size="small"></docs-spacer>

### latest/next

You may have noticed in the code snippet above something like `@latest`

These terms correspond to [npm distribution tags](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag), where `latest` is stable, production-ready code, and `next` is generally unstable and not suitable to be referenced in a live environment.

These dist tags gives the toolkit the ability to deploy updates and fixes to your application, without you having to lift a finger!

Choose the right tag for your situation, and update accordingly (e.g. `https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@next/dist/bundle.js`)

## Install ZUI packages via npm/yarn

If you want an à la carte experience, you can install individual ZUI 4 component packages via Yarn or NPM.

The following works with no extra work:
```shell
> yarn add @zywave/zui-components-all
```

**Note:** All packages are distributed as standard ES modules. You must deliver or bundle these packages accordingly.

### Where do I find a list of released ZUI packages to install?

- Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
- Check out our [monorepo](https://gitlab.zywave.com/devkit/zui/zui) for all available packages