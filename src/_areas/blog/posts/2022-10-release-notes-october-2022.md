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
Web browsers offer users the ability to manage their language preferences. These preferences serve as hints to website authors for internationalization via time formatting, localization of text, etc.

We've updated `<zywave-analytics>` to include the [languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages) a user has configured with their browser as a property on the user in Heap via a new `languages` property.

Because a user may have multiple languages, the syntax of this field may seem a bit odd. Instead of trying to explain it, an example will probably do a better job: given a user who prefers English (United States), then Spanish (Mexico), then English (United Kingdom), the language field on the user would be stored as: `[en-us];[es-mx];[en-gb]` in Heap.

We'll evaluate the usefulness of this change when we have real user data behind it, but we hope this can help illuminate language barriers and opportunities for Zywave to expand.

## Additional bug fixes

### ZUI Select Dropdown
 * Include "Select all" option in the options list height calculation
 * Retain selected option while searching in a single-select dropdown
