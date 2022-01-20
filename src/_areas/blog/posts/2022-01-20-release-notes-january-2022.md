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

## ZUI Dropdown Multi-select gets "Select all" support

This feature has been commonly requested since the initial release of this component. With this update, you'll be able to utilize "Select all", and even have control on how that is reflected back to you.

<docs-note>

<strong>Reminder</strong>: ZUI doesn't provide text. You must supply text-related attributes/properties, like `select-all-option-label`.

</docs-note>

```html
<zui-select-dropdown 
  multiple="" 
  enable-select-all="" 
  select-all-option-label="Select all">
  <!-- <zui-option> elements -->
</zui-select-dropdown>
```