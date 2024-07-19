---
layout: blog
type: blogPost
title: Release Notes - July 2024
description: Bug fixes, enhancements, and maintenance release notes
date: 2024-07-18T23:48:10.402Z
hideToc: false
tags:
  - Release Notes
---
## Bug fixes

#### Minor fixes to ZUI Error Page component for a more consistent experience

* The 404 error type of `<zui-error-page>`'s illustration background color matched the background of our standard application layout, so we darkened it to stand out more and to match the other error type illustrations.
* The default slot for `<zui-error-page>` will hide or show based on whether there are slotted content to eliminate white-space taking up unnecessary screen real estate.

<docs-note>To provide users with a good experience, even when they unfortunately encounter a page error, use `<zui-error-page>` to guide them on what to do next. [Learn more about this component here!](/design-system/components/error-pages/)</docs-note>

<docs-spacer size="small"></docs-spacer>

### Fixed miscalculation of ZUI Shell layout when there is a shell banner present

`<zui-shell-footer>` was being pushed below the viewport when the page did not scroll, causing the screen to shake unpredictably if the user tried to scroll down. This was due to a layout height miscalculation when `<zui-shell-banner>` was present. We have since fixed this bug and it should no longer be an issue.

<docs-spacer></docs-spacer>

## Enhancements

### Read-only states for form fields are now more obvious than ever

`<zui-input>`, `<zui-select>`, and `<zui-select-dropdown>`'s read-only states were not very obvious and even inaccessible to screen readers. We've improved their read-only states to be more obvious and consistent with the other states.

<docs-spacer size="small"></docs-spacer>

### ZUI Textarea will now adjust its size to fit its contents

We've enabled `field-sizing` support for `<zui-textarea>` so its size will adjust to its contents. One caveat with this is that `field-sizing` is only limited to Chrome and Edge browsers as of this release. With time, we hope other browsers will also support it.

<docs-note>`field-sizing` support and behavior will not be consistent across all browsers as of this release. [Learn more about field-sizing here.](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing)</docs-note>

<docs-spacer></docs-spacer>

## Maintenance

### Updated CSS custom state syntax

We are early adopters of CSS custom states. In the early stages of CSS custom states, the syntax was prefixed with `:--`, such as `zui-progress:--indeterminate`. Now the new syntax is `:state()` and we are updating to reflect that for continued browser support.

<br>

```css
/* Old syntax */
zui-progress:--indeterminate {
  display: block;
}

/* New syntax */
zui-progress:state(indeterminate) {
  display: block;
}
```

<br>

<docs-note>`:state()` is still an experimental feature, but supported in all major browsers. Learn more about the [:state() CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:state) and [CustomStateSet API](https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet).</docs-note>