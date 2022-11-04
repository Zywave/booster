---
layout: blog
type: blogPost
title: Release Notes - October 2022
description: Minor bug fixes and enhancements
date: 2022-11-04T00:19:36.764Z
hideToc: false
tags:
  - Release Notes
---
This month's release is a light one with enhancements to gather user language preferences in Heap via `<zywave-analytics>` and some very much needed bug fixes for ZUI Select Dropdown.

<docs-spacer></docs-spacer>

## Including a user's language preferences in Heap

Web browsers offer users the ability to manage their language preferences. These preferences serve as hints to website authors for internationalization via time formatting, localization of text, etc.

We've updated `<zywave-analytics>` to include the [languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages) a user has configured with their browser as a property on the user in Heap via a new `languages` property.

Because a user may have multiple languages, the syntax of this field may seem a bit odd. Instead of trying to explain it, an example will probably do a better job: given a user who prefers English (United States), then Spanish (Mexico), then English (United Kingdom), the language field on the user would be stored as: `[en-us];[es-mx];[en-gb]` in Heap.

We'll evaluate the usefulness of this change when we have real user data behind it, but we hope this can help illuminate language barriers and opportunities for Zywave to expand.

<docs-spacer></docs-spacer>

## ZUI Select Dropdown bug fixes

* Include "Select all" option in the options list height calculation in a multi-select dropdown, since it was getting cut off.
* Retain selected option while searching in a single-select dropdown.

<docs-spacer></docs-spacer>

## Additional features and changes

F﻿or full details of what went into this release, check out [the release milestone](https://gitlab.com/groups/zywave/app-platform/devkit/-/milestones/29#tab-issues).

<docs-spacer></docs-spacer>

## S﻿neak peek

This month's release was a bit light, but we've been working on a lot of good enhancements that we're excited to share with you soon. Just a taste of what to expect:

* B﻿ulk action support for ZUI Table
* M﻿ulti-proxy support for APIs hosted at multiple domains
* A﻿ template of how to build your own API-driven, interoperable components to share with other engineers