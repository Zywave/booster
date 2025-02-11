---
layout: blog
type: blogPost
title: Release Notes - February 2025
description: ZUI Tooltip gets an overhaul with the Popover API; accessibility
  win with prefers-reduced-motion; simplified font family list; and more!
date: 2025-02-11T21:23:43.818Z
hideToc: false
tags:
  - Release Notes
---
## Enhancements

### ZUI Shell Topbar scrolling animation disabled for users that prefer reduced motion

Opting out of the ZUI Shell Topbar scrolling animation has always been an option via the attribute `no-scroll-animation`. We've taken it a step further to automatically disable the scrolling animation when we detect that the user has enabled a setting on their device or browser to minimize the amount of non-essential motion via the CSS media feature `prefers-reduced-motion`.

<br>

```html
<zui-shell-topbar no-scroll-animation></zui-shell-topbar>
```

<docs-spacer size="small"></docs-spacer>

### ZUI Tooltip now uses the native popover API

Since the inception of ZUI Tooltip, we've encountered issues with the stacking context of elements, such as tooltips appearing behind other elements on the page and getting cut off when placed inside an overflow element. This was largely due to the fact that we couldn't declare ZUI Tooltip as a special element such as a native dialog, dropdown, or popover that browsers identify as a separate window. Fortunately with the new Popover API, we are able to declare ZUI Tooltips as a popover, eliminating previous issues with the stacking context. Say good bye to z-index and overflow issues!

<docs-note><strong>Note:</strong> All ZUI Tooltips will be hidden in browsers that do not support the Popover API.</docs-note>

#### Additional tooltip corner positions support

ZUI Tooltips now supports 4 new tooltip positions: top-left, top-right, bottom-left, and bottom-right.

<br>

```html
<zui-tooltip position="top left"></zui-tooltip>
<zui-tooltip position="top right"></zui-tooltip>
<zui-tooltip position="bottom left"></zui-tooltip>
<zui-tooltip position="bottom right"></zui-tooltip>
```

<docs-spacer size="small"></docs-spacer>

#### Other ZUI Tooltip enhancements

* Improved word breaks for long tooltip words and messages
* Replaced the default trigger icon `zui-help` with `zui-details` and decreased the icon size to match current design docs
* Increased maximum tooltip message width from `250px` to `75ch`
* Fixed ZUI Tooltip losing its padding inside ZUI Table
* Improved positioning logic

  * Positioning logic now takes margins into consideration
  * Calculations on the far right side of the viewport is wonky, but will address in the future

<docs-note>Check out [the ZUI Tooltips documentation](/design-system/components/tooltips/) and start using it today!</docs-note>

<docs-spacer size="small"></docs-spacer>

### CSS Custom States documentation

To assist in rendering the documentation for our web components, we maintain and distribute a package: [@zywave/customelement-manifest-element](https://www.npmjs.com/package/@zywave/customelement-manifest-element). We have updated this component to support rendering Custom CSS states when applicable. For those who aren't familiar, Custom CSS states is a way where custom elements can provide additional styling capabilities, based on their own internal states. This is similar in practice to what [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) provide for native elements.

We've utilized this feature for quite some time, but our documentation was non-existent here aside from perhaps some demos. With some updates to the [custom element manifest schema](https://github.com/webcomponents/custom-elements-manifest) which `customelement-manifest-element` renders, there is now a supported standard format to document these.  Applicable ZUI and ZAPI components have been updated to document their CSS Custom States. For an example, check out [the Zywave Shell documentation](/application-framework/components/shell/?tab=api).

To learn more about CSS Custom States, check out <https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet>.

<docs-spacer size="small"></docs-spacer>

### Base font-family simplification

In our design system, we intentionally use ["system fonts"](https://fonts.google.com/knowledge/glossary/system_font_web_safe_font) so as to decrease our footprint in our applications. For the longest time, this was done via the following CSS declaration:
<br>
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
```

We have changed this, and expect no notable changes to our users:
<br>
```css
font-family: system-ui, sans-serif;
```

For more on `system-ui`, see <https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#system-ui>.

<docs-spacer></docs-spacer>

## Bug fixes

### Form-associated custom elements focus and validation tweaks

With the [input validation enhancement last month](/blog/posts/2025-01-release-notes-january-2025/#inputs-now-participate-in-native-form-validation), we started seeing non-user impacting errors being logged in Firefox in the form `"An invalid form control with name='' is not focusable"`. While this wasn't manifesting as an issue for users, it did start us exploring how to improve focusability of ZUI Input.

For improved focus support, all form-associated custom elements in ZUI now delegate focus, via [`delegatesFocus`](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus).

This should have no notable impact, but does reduce the amount of code required to support this key aspect of web development in our toolkit.

<docs-spacer></docs-spacer>

## Deprecations and removed features

<docs-note>There are no deprecations or removed features in this release.</docs-note>