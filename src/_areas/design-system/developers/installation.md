---
layout: documentation
title: Installation
subtitle: Get started with our design system!
---

There are two ways you can use ZUI 4 in your application: install the packages via Yarn or NPM; or slap our bad boy ZUI loader CDN script and stylesheets into your application.

<Spacer/>

## Install ZUI packages

If you want an à la carte experience, you can install individual ZUI 4 component packages via Yarn or NPM.

Since most Zywave packages are private, include a `.yarnrc` or `.npmrc` file in your parent directory and point it to the registry:

```shell
# yarnrc
"@zywave:registry" "http://packages.zywave.com/npm/private-npm/"

# npmrc
@zywave:registry=http://packages.zywave.com/npm/private-npm/
```

<Spacer size="small"/>

After that, you can now access all Zywave packages and install all the things, including ZUI:

```shell
# Yarn
yarn add @zywave/[zui-package]

# NPM
npm install @zywave/[zui-package]

# Tip: Include @next at the end of your ZUI page name to get the most recent pre-released version
# For example: yarn add @zywave/zui-shell@next
```

<zui-well type="info" static>Don't forget to provide polyfills for our favorite browser Internet Explorer 11!</zui-well>

<Spacer size="small"/>

### Where do I find a list of released ZUI packages to install?

- Search for `@zywave` at [npmjs.com](https://www.npmjs.com/search?q=%40zywave)
- Check out our [monorepo](https://gitlab.zywave.com/zui/zui/tree/master/packages) for all available packages

---

## ZUI loader CDN

For a plug and chug experience, the ZUI loader is the perfect solution to quickly get started! Gain access to all of our components, most web components polyfills, and stylesheets without having to install a single package. This is a popular choice among developers when building a new application.

### Determine if your application requires stable third-party components

1. If yes, get the most recent **stable** version here: [https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/](https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/)
1. If no, get the most recent **pre-released** version here: [https://cdn.zywave.com/@zywave/zui-bundle@next/dist/](https://cdn.zywave.com/@zywave/zui-bundle@next/dist/)
1. There are three required files in order for the ZUI CDN to work properly in every application
1. `zui-bundle.fouc.css` - required for a smooth transition while all the scripts on the page loads, especially for Internet Explorer 11
1. `zui-bundle.app.css` - required for resetting styles for all base elements in your application
1. `zui-loader.js` - required to load ALL ZUI components properly, including most polyfills for Internet Explorer 11

### Place the script and stylesheets in your application

```html
<!doctype html>
<html>
  <head>
    <title>Installation | Zywave User Interface</title>

    <!-- These two stylesheets should always be listed before all other application styles -->
    <!-- Make sure `zui-bundle.fouc.css` is always listed first to counter FOUC -->
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@4.0.4/dist/css/zui-bundle.fouc.css" />
    <link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@4.0.4/dist/css/zui-bundle.app.css" />

    <script type="text/javascript" src="https://cdn.zywave.com/@zywave/zui-bundle@4.0.4/dist/zui-loader.js"></script>
  </head>
  <body>
    Sometimes, the ZUI CDN loads faster than the elements in existing/legacy applications which causes rendering issues.
    This is also true for dumb Internet Explorer 11.

    If this is the case for you, instead of placing `zui-loader.js` in the <head>, place it at the bottom of your page.

    <!-- If I load too fast for the application, allow me to take a chill pill down here -->
    <script type="text/javascript" src="https://cdn.zywave.com/@zywave/zui-bundle@4.0.4/dist/zui-loader.js"></script>
  <body>
</html>
```

Note: as of writing this documentation, version 4.0.4 was the most recent stable version.

<Spacer size="small"/>

### Can I use distribution tags such as `@next` for my ZUI loader script?

We **do not** recommend this method since we cannot guarantee the stability of our releases in combination with your application. While it may be more convenient to use a tag, we highly recommend you to lock down your version of ZUI, especially for production environments.
