---
layout: blog
type: blogPost
title: Release Notes - October 2022
description: "Major feature added to ZUI Table: bulk actions"
date: 2022-12-09T14:00:13.149Z
hideToc: false
tags:
  - Release Notes
---
## ZUI Table bulk actions feature is here
Bulk actions, yay!

<docs-spacer></docs-spacer>

## Including a user's language preferences in Heap
Web browsers offer users the ability to manage their language preferences; for many, this often is the default applied when they first downloaded the browser, but some users do customize these preferences and web pages can choose to respect these settings (time formatting, localization of text, etc.)

We've updated `<zywave-analytics>` to include the [languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages) as a property on users in Heap via a new `languages` property.

Because a user may have multiple languages, the syntax of this field will be a bit unique. As an example, given a user who prefers English (United States), then Spanish (Mexico), then English (United Kingdom), the language field on the user will be stored as: `[en-us];[es-mx];[en-gb]`.

We'll evaluate the usefulness of this change when we have real user data, but we hope this can help illuminate language barriers and opportunities for Zywave to expand.

## Additional bug fixes

### ZUI Select Dropdown
 * Include "Select all" option in the options list height calculation
 * Retain selected option while searching in a single-select dropdown