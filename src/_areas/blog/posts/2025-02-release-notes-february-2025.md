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

<docs-spacer size="small"></docs-spacer>

```html
<zui-shell-topbar no-scroll-animation></zui-shell-topbar>
```

<docs-spacer size="small"></docs-spacer>

### ZUI Tooltip gets an overhaul

Since the inception of ZUI Tooltip, we've encountered issues with the stacking context of elements, such as tooltips appearing behind other elements on the page and getting cut off when placed inside an overflow element. This was largely due to the fact that we couldn't declare ZUI Tooltip as a special element such as a native dialog, dropdown, or popover that browsers identify as a separate window. Fortunately with the new Popover API, we are able to declare ZUI Tooltips as a popover, eliminating previous issues with the stacking context. Say good bye to z-index and overflow issues!

<docs-note><strong>Note:</strong> All ZUI Tooltips will be hidden in browsers that do not support the Popover API.</docs-note>

#### Additional tooltip corner positions support

ZUI Tooltips now supports 4 new tooltip positions: top-left, top-right, bottom-left, and bottom-right.

<docs-spacer size="small"></docs-spacer>

```html
<zui-tooltip position="top left"></zui-tooltip>
<zui-tooltip position="top right"></zui-tooltip>
<zui-tooltip position="bottom left"></zui-tooltip>
<zui-tooltip position="bottom right"></zui-tooltip>
```

#### Other ZUI Tooltip enhancements

* Improved word breaks for long tooltip words and messages
* Replaced the default trigger icon `zui-help` with `zui-details` and decreased the icon size to match current design docs
* Increased maximum tooltip message width from `250px` to `75ch`
* Fixed ZUI Tooltip losing its padding inside ZUI Table
* Improved positioning logic

  * Positioning logic now takes margins into consideration
  * Calculations on the far right side of the viewport is wonky, but will address in the future

<docs-spacer size="small"></docs-spacer>

### CSS custom states are now exposed in our documentation

We use custom-elements-manifest to generate custom elements JSON schemas of our custom elements so we can publish information such as attributes, methods, events, etc. We have a couple places where we use CSS custom states and they are now included in the schema.

For example, you can check out the [API docs for ZUI Table](/design-system/components/tables/) to find a new section regarding CSS custom states that we use in the web component.

<docs-spacer size="small"></docs-spacer>

### Simplified font family list

For five years, we had a long font-family list to let users' browsers decide the best font to display our application's text that included `-apple-system` and `BlinkMacSystemFont`. These two have been replaced by `system-ui`, so we've simplified and shortened the font family list by getting rid them and then some!

<docs-spacer size="small"></docs-spacer>

```scss
// old font-family list
$zui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

// new font-family list
$zui-font-family: system-ui, sans-serif;
```

<docs-spacer></docs-spacer>

## Bug fixes

### Validation messages not rendering on Chromium

When a form-associated custom element, such as [ZUI Input](/design-system/components/text-inputs/), delegates focus via `delegateFocus`, no validation message is displayed when the custom element is invalid. This was a [Chromium bug](https://issues.chromium.org/issues/389587444) and it has been fixed by them.