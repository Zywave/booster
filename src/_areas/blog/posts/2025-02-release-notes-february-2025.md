---
layout: blog
type: blogPost
title: Release Notes - February 2025
description: TODO
date: 2025-02-09T23:48:10.402Z
hideToc: false
tags:
  - Release Notes
---

## Enhancements

### Tooltip now uses the native popover API

TODO

### CSS Custom States documentation

To assist in rendering the documentation for our web components, we maintain and distribute a package: [@zywave/customelement-manifest-element](https://www.npmjs.com/package/@zywave/customelement-manifest-element). We have updated this component to support rendering Custom CSS states when applicable. For those who aren't familiar, Custom CSS states is a way where custom elements can provide additional styling capabilities, based on their own internal states. This is similar in practice to what [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) provide for native elements.

We've utilized this feature for quite some time, but our documentation was non-existent here aside from perhaps some demos. With some updates to the [custom element manifest schema](https://github.com/webcomponents/custom-elements-manifest) which `customelement-manifest-element` renders, there is now a supported standard format to document these.  Applicable ZUI and ZAPI components have been updated to document their CSS Custom States. For an example, check out [the Zywave Shell documentation](/application-framework/components/shell/?tab=api).

To learn more about CSS Custom States, check out <https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet>.

### Base font-family simplification

In our design system, we intentionally use ["system fonts"](https://fonts.google.com/knowledge/glossary/system_font_web_safe_font) so as to decrease our footprint in our applications. For the longest time, this was done via the following CSS declaration:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
```

We have changed this, and expect no notable changes to our users:

```css
font-family: system-ui, sans-serif;
```

For more on `system-ui`, see <https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#system-ui>.

## Bug fixes

### Form-associated custom elements focus and validation tweaks

With the [input validation enhancement last month](/blog/posts/2025-01-release-notes-january-2025/#inputs-now-participate-in-native-form-validation), we started seeing non-user impacting errors being logged in Firefox in the form `"An invalid form control with name='' is not focusable"`. While this wasn't manifesting as an issue for users, it did start us exploring how to improve focusability of ZUI Input.

For improved focus support, all form-associated custom elements in ZUI now delegate focus, via [`delegatesFocus`](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus).

This should have no notable impact, but does reduce the amount of code required to support this key aspect of web development in our toolkit.

## Deprecations and removed features

<docs-note>

There are no deprecations or removed features in this release.

</docs-note>
