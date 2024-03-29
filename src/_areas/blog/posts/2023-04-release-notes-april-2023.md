---
layout: blog
type: blogPost
title: Release Notes - April 2023
description: "For the past several months, many improvements have been
  accumulating for this month's release: enhancements, bug fixes, and even
  breaking changes."
date: 2023-04-03T23:42:49.997Z
hideToc: false
tags:
  - Release Notes
---
Many improvements have been accumulating for this month's release, including breaking changes to ZUI icons since we deprecated a bunch of icons. Another important change to the ZUI and ZAPI bundles is we will be deprecating `zui-loader.js` and `loader.js` and have increased the severity of messaging from console warnings to browser alerts for those still using the outdated method of loading the bundles.

---

## Breaking changes to ZUI icons

We have deprecated 22 icons. This deprecation has been in the making since November 2020.

Here's the list of icons that are deprecated with some replacement suggestions. Please replace these deprecated icons immediately if you haven't done so.

<docs-spacer size="small"></docs-spacer>

### Navigation icons

| Deprecated icon             | Replacement                 |
| --------------------------- | --------------------------- |
| `zui-nav-admin`             | `zui-nav-generic-admin`     |
| `zui-nav-color-themes`      | `zui-nav-generic-branding`  |
| `zui-nav-menu`              | `zui-shell-menu`            |
| `zui-nav-org-overview`      | `zui-nav-company`           |
| `zui-nav-reports`           | `zui-nav-generic-reports`   |
| `zui-nav-resources`         | `zui-nav-generic-resources` |
| `zui-nav-zywave-university` | `zui-nav-lms`               |
| `zui-nav-activities`        |                             |
| `zui-nav-books`             |                             |
| `zui-nav-presentations`     |                             |
| `zui-nav-rfp`               |                             |
| `zui-nav-setup`             |                             |

<docs-spacer size="small"></docs-spacer>

### System icons

| Deprecated icon      | Replacement             |
| -------------------- | ----------------------- |
| `zui-add-circle`     | `zui-indicator-add`     |
| `zui-align`          |                         |
| `zui-apps`           | `zui-shell-apps`        |
| `zui-check-circle`   | `zui-indicator-success` |
| `zui-close`          | `zui-remove`            |
| `zui-close-circle`   | `zui-indicator-failure` |
| `zui-minus`          | `zui-remove`            |
| `zui-remove-circle`  | `zui-indicator-remove`  |
| `zui-warning-circle` | `zui-indicator-warning` |
| `zui-dynamic-list`   |                         |

<br>

<docs-note>To view the entire list of available icons, [check here](/design-system/components/icons/?tab=usage).</docs-note>

---

## Bug fixes

`zui-shell-nav-item` will wrap long text in nav items going forward.

---

## Enhancements and features

### Improving `zui-radio-group` and `zui-select-dropdown` specs

When we first built the Booster design system years ago, we were early adopters of web components and did not realize the importance of aligning our component specs to native HTML element specs. Misaligned specs affected the efficiency of engineers since they had to troubleshoot why a custom element didn't perform as intended and find a workaround.

Shoutout to Trevor for adding these enhancements to a couple of the Booster components so they are more closely aligned to native HTML element specs!

<docs-spacer size="small"></docs-spacer>

#### `zui-radio-group`

`zui-radio-group` now has a read only property called `value` for improved data representation in form submissions.

<docs-spacer size="small"></docs-spacer>

#### `zui-select-dropdown`

* `zui-select-dropdown` has a new read-only property called `type` that is `select-one` by default and `select-multiple` when it is a multi-select dropdown (by including the attribute `multiple`: `<zui-select-dropdown multiple>`). 
* `zui-select-dropdown` has a new read-only property called `value` that returns the first selected option from a single-select dropdown or multiple values from multiple selected options for a multi-select dropdown.
* Improved behavior in a non-scrolling `zui-dialog`. When a `zui-select-dropdown` is inside of a `zui-dialog` that does not scroll, the `zui-dialog` will no longer grow in height to accommodate the dropdown list when a user clicks to reveal it.

<docs-spacer size="small"></docs-spacer>

#### `zui-notifier` demos

We've finally added demos and code snippets to the Notifier page since they were missing. [Check them out!](/design-system/components/notifiers/?tab=demos)

<docs-spacer size="small"></docs-spacer>

### Debugging just got easier with development bundles

We've added unminified JS files for easier debugging since our bundles are very aggressively minified for production, making it very difficult to debug our components. Not only will you be able to debug all Booster components with less effort moving forward, you also get the added benefit of Lit dev logging with extra runtime warnings.

<docs-spacer size="small"></docs-spacer>

#### How do I use the development build files?

All development build (unminified) files are located in the `/dev/` folder instead of the `/dist/` of each bundle:

```html
<!-- ZUI -->

<!-- Minified PRODUCTION ZUI files -->
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/components/table.js"></script>

<!-- Unminified DEVELOPMENT ZUI files -->
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dev/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zui-bundle@latest/dev/components/table.js"></script>
```

```html
<!-- ZAPI -->

<!-- Minified PRODUCTION ZAPI files -->
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dist/components/api-proxy.js"></script>

<!-- Unminified DEVELOPMENT ZAPI files -->
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dev/bundle.js"></script>
<script type="module" src="https://cdn.zywave.com/@zywave/zywave-api-toolkit-bundle@latest/dev/components/api-proxy.js"></script>
```

<docs-spacer size="small"></docs-spacer>

#### Can I use the development bundles in lower environments for my apps?

We strongly encourage you to do so! However, please *don't use them in production* since they will reduce your app's performance to end users.

---

## Deprecating loader scripts

We have old scripts to load the ZUI and ZAPI bundles that are now deprecated in favor of loading the ES module versions. For months we've notified users of this change via console warnings if the old scripts are still being used to load ZUI and ZAPI bundles, but now we've increased the severity of this messaging to browser alerts. If you're still using `zui-loader.js` for ZUI and/or `loader.js` for ZAPI in your applications, you must switch to `bundle.js`.

<docs-note>For official installation instructions for the ZUI bundle, [read this](/design-system/developers/installation/).  
For official installation instructions for the ZAPI bundle, [read this](/application-framework/developers/installation/).</docs-note>
