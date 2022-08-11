---
layout: blog
type: blogPost
title: Release Notes - July 2022
description: To do later!!!
date: 2022-08-10T22:15:57.005Z
hideToc: false
tags:
  - Release Notes
---
Melted ice cream

## Other changes

### `[hidden]` support breaking change
Did you know that HTML specifies a [global `hidden` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)? This attribute essentially tells the user agent styles to `display: none;` on that element, but due to how CSS specificity works, if a web author sets the `display` property to something else, it won't be hidden!

Unknown to ZUI, the library we used for some of our initial components ([Polymer](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview)) introduced a sneaky style into everyone's pages:

```html
<custom-style>
  <style is="custom-style">
    [hidden] { display: none !important; }
  </style>
</custom-style>
```

With the removal of Polymer, these styles are now gone, which means elements that were once hidden may not be any longer.

We have updated our [base component host styles](https://gitlab.com/zywave/devkit/web-sdk/zui/-/blob/main/packages/components/zui-base/src/zui-base.scss#L15) to accomodate, but it's important to call out that we no longer specify `!important` which _could_ be a breaking change for some!

If you're currently setting a `display` property on an element but relying on the `hidden` attribute to hide that same element, you will need to remove this display property.

This change is consistent with native behavior, which is why we are omitting `!important` but we understand this could break some workflows.

If you'd like the old behavior back, you can add the following style to your application's CSS:
```css
[hidden] {
  display: none!important;
}
```