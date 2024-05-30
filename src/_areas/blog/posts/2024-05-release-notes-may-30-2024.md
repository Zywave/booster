---
layout: blog
type: blogPost
title: Release Notes - May 30, 2024
description: Minor updates to ZUI Select Dropdown and Zywave Shell
date: 2024-05-31T01:00:23.393Z
hideToc: false
tags:
  - Release Notes
---
## Enhancements

### ZUI Select Dropdown to return selected options as an array of objects

ZUI Select Dropdown `<zui-select-dropdown>` has been enhanced to return the selected options as an array of `ZuiOptionObject` objects to more closely align with the native `<select>` element's [`selectedOptions` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions).

[Learn how to implement `<zui-select-dropdown>` here.](/design-system/components/dropdown-selects/)

<docs-spacer></docs-spacer>

## Maintenance

* Removed the internal livechat feature specifically for users to connect with Zywave Support
* Reimplemented troubleshooting feature in Zywave Shell

<docs-note>Did you know that you can press `CTRL` + `ALT` + `Z` in any Zywave application using Zywave Shell `<zywave-shell>` to get console information for Zywave Support to help our users troubleshoot issues they are experiencing?</docs-note>