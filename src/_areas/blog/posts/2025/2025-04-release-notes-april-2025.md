---
layout: blog
type: blogPost
title: Release Notes - April 2025
description: TODO
date: 2025-03-17T02:00:43.818Z
hideToc: false
tags:
  - Release Notes
---

## Enhancements

### Global search

For consumers of the [Zywave Shell](/application-framework/components/shell/) component, we're rolling out the global search experience to all users.

If your application does not override the `search` slot, the global search experience will be presented. At the time of this post, global search supports searching for Content or Accounts.

## Bug Fixes

## Deprecations and removed features

## Maintenance

### Migrating from yarn to npm

When we originally built these components, we utilized yarn as our package manager of choice for a few reasons:

1. It supported monorepos
1. It had the ability to install dependencies from a lockfile
1. It had great cache configuration options to reduce CI build times

Since then, npm has updated to support all of those use cases, and yarn v1 has been deprecated for quite some time.

We've updated all of our repositories to utilize npm instead.
