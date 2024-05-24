---
layout: blog
type: blogPost
title: Release Notes - February 2024
description: This release includes subtle, yet impactful, enhancements to a couple components that affect ZUI Shell overall.
date: 2024-02-22T02:00:24.871Z
hideToc: false
tags:
  - Release Notes
---
ZUI Shell Nav received a handful of updates this month, including subtle visual updates, and a new icon was added to our collection. We also made a bug fix to support the `[hidden]` attribute when using in conjunction with `class="zui"`.

<docs-spacer></docs-spacer>

## Bug fixes

### Add support for `[hidden]` attribute when using in conjunction with `class="zui"`
This month we addressed a bug with our helper CSS classes. When using the `[hidden]` attribute in conjunction with `class="zui"`, the element was not being hidden. This has been fixed and the `[hidden]` attribute will now work as expected.
<br>

```html
<div class="zui" hidden>
  This content will now be hidden.
</div>
```

<br>

Did you know we have a CSS guide with ZUI helper CSS classes? Check it out [here](/design-system/developers/css-guide/).

<docs-spacer></docs-spacer>

## Enhancements

### Subtle visual updates to ZUI Shell Nav

Subtle, but impactful, visual updates have been made to the ZUI Shell Nav `<zui-shell-nav>` component. The text and icons in the sidenav have been updated to be more visually appealing and closer to our ultimate vision for Zywave applications.

![Before and after ZUI Shell Nav received some subtle visual updates](/images/2024-02-release-notes-shell-nav-visual-updates.png "Before and after ZUI Shell Nav received some subtle visual updates")

Learn more about `<zui-shell-nav>` and all its sister components that make up ZUI Shell [here](/design-system/components/shell/).

<docs-spacer size="small"></docs-spacer>

### Zywave logo colors updated to match new branding colors
We've updated the colors of the Zywave logo in `<zui-logo>` to match the new company branding colors.

![Updated Zywave logo colors to match new branding](/images/2024-02-release-notes-logo-colors.png "Updated Zywave logo colors to match new branding")

This change will be reflected in all Zywave applications that use `<zui-logo>`, `<zui-shell>`, and/or `<zywave-shell>`.

Learn more about our `<zui-logo>` component [here](/design-system/components/logos/).

<docs-spacer></docs-spacer>

## Features

### One new icon added to ZUI Icons collection
We've added a new icon to our icons collection called `zui-nav-admin-console`. This icon is only to be used in the side nav of ZUI Shell to represent the Zywave Admin application.

![New navigation icon called admin console](/images/2024-02-release-notes-admin-console-icon.png "New navigation icon called admin console")
<br>

```html
<zui-icon icon="zui-nav-admin-console"></zui-icon>
```

<br>

Check out our icons collection [here](/design-system/components/icons/?tab=usage).