---
layout: blog
type: blogPost
title: Release Notes - October 12, 2023
description: First wave of new navigation icons and fixing a zui-select-dropdown bug
date: 2023-10-13T01:00:00.000Z
hideToc: false
tags:
  - Release Notes
---
## First wave of navigation icon design updates

For this release, we updated several canonized icons, specifically for the side navigation of our Zywave products. The new design will be line icons with parts at a 20% fill opacity.

<br>

### Old icons

![Old ZUI icons that were updated with this release](/images/zui-nav-icons-old.png "Old ZUI icons that were updated with this release")

<br>

### New icons

![First wave of new ZUI icons](/images/zui-nav-icons-new.png "First wave of new ZUI icons")

<br>

### List of updated icons

Here's a list of the icons that were updated in this release:

1. zui-nav-accounts
2. zui-nav-activities
3. zui-nav-company
4. zui-nav-content
5. zui-nav-email-marketing
6. zui-nav-home
7. zui-nav-mods
8. zui-nav-portal-admin
9. zui-nav-proposals
10. zui-nav-proposals-uk
11. zui-nav-prospecting
12. zui-nav-settings
13. zui-nav-generic-reports

<br>

This is just the first wave of updates to our collection of icons. Be sure to check our [icons list for updates](/design-system/components/icons/?tab=usage)!

<docs-spacer></docs-spacer>

## Bug fix: ZUI Dialog scrollbar visibility issue with dynamic content

Dynamic content that was injected into ZUI Dialog after it opened did not trigger an update, so the scrollbar didn't become visible and go into effect. The inability to scroll was blocking users from completing tasks. However, this has been fixed!