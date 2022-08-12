---
layout: blog
type: blogPost
title: Release Notes - July 2022
description: ZUI is no longer dependent on Polymer since ZUI Tabs was rewritten
  and ZUI Pages has been removed from our toolkit.
date: 2022-08-11T14:03:55.608Z
hideToc: false
tags:
  - Release Notes
---
# ZUI bundle size decreased by 300kBs after removal of Polymer dependency

The goal for July was to remove dependencies on Polymer in order to trim some kilobytes off of the ZUI bundle. We identified that Polymer made up ~300kBs of our bundle size and only two ZUI components were dependent on it: ZUI Tabs and ZUI Pages. Further, utilization statistics showed ZUI Pages was barely used by consumers. The few who did use ZUI Pages misused it, treating it as a `<div>` wrapper, and relied on their framework of choice to show and hide content.

<docs-spacer></docs-spacer>

# ZUI Tabs rewritten without Polymer

One of the last ZUI components that heavily relied on Polymer was ZUI Tabs `<zui-tab>`. In our efforts to rewrite ZUI Tabs, we tried our best to keep the ZUI Tabs functionality the same to not break current implementations of ZUI Tabs in Zywave products. There may be minor differences, but nothing major that should prevent users from completing their tasks.

<docs-spacer></docs-spacer>

# ZUI Pages removed from the ZUI bundle completely

<docs-note>This is a breaking change in July's release.</docs-note>

<docs-spacer size="small"></docs-spacer>

Utilization statistics showed little to no use of ZUI Pages `<zui-pages>` and most consumers of ZUI Tabs relied on their frameworks to show and hide content. We collaborated with the engineering teams whose web applications were still using ZUI Pages to replace it with another solution, so we can get rid of this under utilized component once and for all.

<docs-spacer size="small"></docs-spacer>

If you are still a consumer of ZUI Pages, please replace it! We no longer support this component.

<docs-spacer></docs-spacer>

# Additional features

* `<zui-input>` now supports `step` attribute
* `<zui-input-file>` now supports the `disabled` attribute and state
* `<zui-logo>` no longer supports IE11-specific logos

<docs-spacer></docs-spacer>

# Bug fixes

* `<zui-table-topbar>`'s `@slotchange` to invoke a single expression instead of multiple expressions
* ZUI components with `hidden` attribute not actually hidden
* Inline ZUI Radio buttons `<zui-radio inline>` previously had a height of `42px`, but it has been changed to `36px`
