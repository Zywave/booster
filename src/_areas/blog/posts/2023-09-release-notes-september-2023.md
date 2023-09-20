---
layout: blog
type: blogPost
title: Release Notes - September 2023
description: Minor updates to ZUI to address bugs, clean up deprecated code, and
  enhance components.
date: 2023-09-29T01:00:00.000Z
hideToc: false
tags:
  - Release Notes
---
## Updated navigation icons

insert blurb about icon updates here

<docs-spacer></docs-spacer>

## Deprecated loader.js

insert blurb about loader.js deprecation

<docs-spacer></docs-spacer>

## Bug fix: ZUI Dialog scrollbar visibility issue with dynamic content

Dynamic content that was injected into ZUI Dialog after it opened did not trigger an update, so the scrollbar didn't become visible and go into effect. The inability to scroll was blocking users from completing tasks. However, this has been fixed!