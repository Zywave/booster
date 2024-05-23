---
layout: blog
type: blogPost
title: Release Notes - March 2024
description: Two bug fixes for ZUI Shell and ZUI Button Group components.
date: 2024-03-14T02:00:24.871Z
hideToc: false
tags:
  - Release Notes
---
Minor release to address two small bugs that affect the visual appearance of the components `<zui-shell-nav-item>` and `<zui-button-group>`.

<docs-spacer></docs-spacer>

## Bug fixes

### Declare size for all icon types in ZUI Shell Nav
Previously, we only declared the size of navigation icons embedded via `<zui-icon>`, `<zui-svg>`, and `<svg>` elements inside `<zui-shell-nav-item>`. Now, we've included all icon types to ensure consistent sizing in the ZUI Shell side navigation, including icons that are embedded via `<img>`.
<br>

```html
<zui-shell-nav-item>
  <img src="/images/icons/home.svg" slot="icon" />
  <a href="#">Home</a>
</zui-shell-nav-item>
```

<br>

Learn about icon rules for ZUI Shell Nav in our [documentation](/design-system/components/shell/?tab=usage#icon-rules).

<docs-spacer size="small"></docs-spacer>

### ZUI Button Group secondary style was missing the bottom border
The bottom border was missing for the secondary style of `<zui-button-group>`. This has been fixed and the bottom border will now display as expected.

![Before and after fix for zui-button-group's bottom border](/images/2024-03-release-notes-button-groups.png "Before and after fix for zui-button-group's bottom border")

Learn more about the ZUI Button Group component in our [documentation](/design-system/components/button-groups).
