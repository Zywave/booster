---
layout: blog
type: blogPost
title: Release Notes - October 2023
description: Minor updates to ZUI to address bugs, clean up deprecated code, and
  enhance components.
date: 2023-10-13T01:00:00.000Z
hideToc: false
tags:
  - Release Notes
---
## Updated navigation icons

Updated navigation icons with new styling - these are now line icons with a 20% fill on part of the icon. The following icons were updated: accounts, activities, dashboard, insights, leads, marketing, portal management, quoting, reporting, settings.

<docs-spacer></docs-spacer>

## Deprecated loader.js

insert blurb about loader.js deprecation

<docs-spacer></docs-spacer>

## Bug fix: ZUI Dialog scrollbar visibility issue with dynamic content

Dynamic content that was injected into ZUI Dialog after it opened did not trigger an update, so the scrollbar didn't become visible and go into effect. The inability to scroll was blocking users from completing tasks. However, this has been fixed!