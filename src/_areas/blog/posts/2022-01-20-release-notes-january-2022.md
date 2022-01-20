---
layout: blog
type: blogPost
title: "Release Notes - January 2022 "
description: Table gets mobile friendly, dialogs get native, and more!
date: 2022-01-20T15:29:36.680Z
hideToc: false
tags:
  - Release Notes
---
The first updates of the 2022 year are coming out, and we've got some pretty awesome features to go over!

## ZUI Table is now mobile responsive

Last month, [we released ZUI Table](/blog/posts/2021-12-09-introducing-the-table-web-component/). Now that we have an HTML design standardized, we're adding a commonly neglected feature of tables in our products: making them work on mobile. With no extra work from you, ZUI Tables in your app will "just work" on mobile!

Here's a quick example of table going from desktop to mobile layout:

TODO INSERT GIF

## ZUI Dropdown Multi-select enhancements

### Select all support

This feature has been commonly requested since the initial release of this component. With this update, you'll be able to utilize "Select all", and even have control on how that is reflected back to you.

```html
<zui-select-dropdown 
  multiple 
  enable-select-all 
  select-all-option-label="Select all">
  <!-- <zui-option> elements -->
</zui-select-dropdown>
```

TODO INSERT GIF

### Truncated selection tags

With the "select all" enhancement, we quickly realized the result list can get quite large. This is currently an issue today, but we believe "select all" will only exacerbate the issue.

So, you can now opt-in to limit the number of selection tags that are displayed in the result list.

```html

<zui-select-dropdown 
  multiple
  maximum-results-display-count="5" 
  truncated-result-message-format="{0} more">
  <!-- <zui-option> elements -->
</zui-select-dropdown>

```

TODO INSERT GIF

## ZUI Dialog goes native

Did you know that [browsers have a built-in dialog component](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)? While currently only Chromium has this component implemented and shipped, Firefox and Safari are on track to release their implementations this year. And, conveniently, Chrome has provided [a nice dialog polyfill](https://github.com/GoogleChrome/dialog-polyfill).

We experimented with the native dialog and polyfill when implementing our feedback component in the Booster documentation site, and we're now ready to start experimenting with a new implementation of ZUI Dialog based on this native component.

Our goal in this change is:

1. ZUI Dialog is currently based on [material web components' dialog](https://github.com/material-components/material-web/tree/master/packages/dialog), which unfortunately limits our ability to push our own design standards, like sticky footers.
2. Having the 3rd party dependency puts our library at risk with respect to dependency management and additionally bloats our code base more than we'd like.

If you'd like to experiment with our implementation, and you currently use zui-bundle, you can do this via DevTools (will require a refresh):

```javascript
// this will persist to localStorage
window.zywave.zui.flags.enableDialogNative = true;

// to revert to the current implementation
window.zywave.zui.flags.enableDialogNative = false;
```

We'd appreciate people trying this out and letting us know if their dialogs break in any way, as we intend to make this the default implementation as early as March 2022.