---
layout: blog
type: blogPost
title: "Release Notes - January 2022 "
description: Table gets mobile friendly, select all coming to a dropdown near you, and more!
date: 2022-01-21T16:24:18.517Z
hideToc: false
tags:
  - Release Notes
---
The first updates of the 2022 year are coming out on January 25th, and we've got some pretty awesome features to go over!

## ZUI Table is now mobile responsive

Last month, [we released ZUI Table](/blog/posts/2021-12-09-introducing-the-table-web-component/). Now that we have an HTML design standardized, we're adding a commonly neglected feature of tables in our products: making them work on mobile. With no extra work from you, ZUI Tables in your app will now look appropriate when rendered at mobile resolutions.

![Table shrinking from desktop to mobile layout](/images/zui-table-mobile-example.gif)

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

### Truncated selection tags

With the "Select all" enhancement, we quickly realized the result list can get quite large. This is currently an issue today, but we believe "Select all" will only exacerbate the issue.

So, you can now opt-in to limit the number of selection tags that are displayed in the result list.

```html
<!-- 
  For the purposes of the demo, maximum-results-display-count is set to 3. 
  We don't recommend such a low number. -->
<zui-select-dropdown 
  multiple
  maximum-results-display-count="3" 
  truncated-result-message-format="{0} more">
  <!-- <zui-option> elements -->
</zui-select-dropdown>
```

Now, to see them both in action!

![Select all demo video](/images/select-all-demo-release-notes.gif)

## ZUI Dialog goes native

Did you know that [browsers have a built-in dialog component](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)? While currently only Chromium has implemented and shipped this component, [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1733536) and [Safari](https://bugs.webkit.org/show_bug.cgi?id=231307) are on track to release their implementations this year. Conveniently, Chrome also provided [a nice dialog polyfill](https://github.com/GoogleChrome/dialog-polyfill).

We experimented with the native dialog and polyfill when implementing our feedback component in the Booster documentation site, and we're now ready to start experimenting with a new implementation of ZUI Dialog based on this native component.

Why are we changing ZUI Dialog? There are actually two reasons for us:

1. ZUI Dialog is currently based on [Material Web's dialog](https://github.com/material-components/material-web/tree/master/packages/dialog), which unfortunately limits our ability to push our own design standards, like sticky footers.
2. Having the 3rd-party dependency puts our library at risk with respect to dependency management and additionally bloats our code base more than we'd like.
    - When we ship the native dialog, we'll shave off 43kB from our bundle (from 48kB to 5kB)!

If you'd like to experiment with our implementation, and you currently use zui-bundle, you can do this via DevTools (will require a refresh):

```javascript
// this will persist to localStorage
window.zywave.zui.flags.enableDialogNative = true;

// to revert to the current implementation
window.zywave.zui.flags.enableDialogNative = false;
```

We'd appreciate people trying this out and letting us know if their dialogs break in any way, as we intend to make this the default implementation as early as March 2022.

## More documentation updates

We've continued to enhance our current documentation, with several usage updates to dialogs, notifiers, text inputs, and more.

Additionally, we have worked to continue to improve our API documentation for our components. You should notice that method documentation is improved with a "Signature" column, and a lot of missing API documentation has been added as well!

## Other updates

* Zywave Shell had some work put in to improve its loading lifecycle. You now have more visibility into the state of Shell as it loads required and supplemental data and code. See [Zywave Shell's API documentation](https://booster.zywave.dev/application-framework/components/shell/?tab=api) for more information.
* Fixed an issue where form controls with the same name could interfere incorrectly with form submission data (most noticeable in ZUI Checkbox).
* Added the ability to override the colors and logo in Zywave Shell client-side.