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

[@zywave/customelement-manifest-element](https://www.npmjs.com/package/@zywave/customelement-manifest-element) was updated to support rendering Custom CSS states when applicable. For those who aren't familiar, Custom CSS states is a way where custom elements can provide additional styling capabilities, based on their own internal states. This is similar in practice to what [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) provide for native elements.

We've utilized this feature for quite some time, but our documentation was non-existent here aside from perhaps some demos. With some updates to something called the ["custom element manifest"](https://github.com/webcomponents/custom-elements-manifest) to support a standard format to document these, you will now start seeing updates to our ZUI and ZAPI toolkits to start documenting this feature. For an example, check out [the Zywave Shell documentation](/application-framework/components/shell/?tab=api).

#### Example
```css
zywave-shell:state(loading) {
  /* CSS to render only while zywave-shell is in its loading state */
}
```

To learn more about CSS Custom States, check out <https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet>.

## Bug fixes

### Form-associated custom elements focus and validation tweaks

With the [input validation enhancement last month](/blog/posts/2025-01-release-notes-january-2025/#inputs-now-participate-in-native-form-validation), we started seeing non-user impacting errors being logged in Firefox in the form `"An invalid form control with name='' is not focusable"`. While this wasn't manifesting as an issue for users, it did start us exploring how to improve focusability of ZUI Input.

For improved focus support, all form-associated custom elements in ZUI now delegate focus, via [`delegatesFocus`](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus).

This should have no notable impact, but does reduce the amount of code required to support this key aspect of web development in our toolkit.

## Deprecations and removed features

<docs-note>

There are no deprecations or removed features in this release.

</docs-note>
