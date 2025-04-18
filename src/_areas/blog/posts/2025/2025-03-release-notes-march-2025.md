---
layout: blog
type: blogPost
title: Release Notes - March 2025
description: Enhancements to ZUI Dialog; improved API docs experience; easier time overriding ZUI Spinner CSS variables; and ZUI Step Flow has been removed from ZUI Bundle
date: 2025-03-13T02:00:43.818Z
hideToc: false
tags:
  - Release Notes
---

## Enhancements

### ZUI Dialog supports automatically closing for forms that specify method="dialog"

We've updated `<zui-dialog>` to conform more with the web-native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog). It is now possible to automatically close a `<zui-dialog>` when a form is submitted and is configured properly -- no JavaScript required!

**Example 1: form\[method="dialog"\]**
```html
<zui-dialog opened>
  <form method="dialog">
    <zui-input name="name" required></zui-input>
    <zui-button type="submit">
      <button type="submit">Submit</button>
    </zui-button>
  </form>
</zui-dialog>
```
<br>

**Example 2: button\[formmethod="dialog"\]**
```html
<zui-dialog opened>
  <form id="form" method="dialog">
    <zui-input name="name" required=""></zui-input>
  </form>
  <zui-button type="submit" slot="footer">
    <button form="form" formmethod="dialog" type="submit">Submit</button>
  </zui-button>
</zui-dialog>
```
<br>

<docs-note>
<strong>Note:</strong> To be consistent with the web platform, you still must handle the submit event of the form with JavaScript to send it to a server.
</docs-note>

<docs-spacer size="small"></docs-spacer>

### Improvement to API docs

In the API tab of our components, we provide a dropdown to choose which component or sub-component the user can see API docs for. However, this dropdown is anchored all the way to the right side of the page layout, so it often gets lost. This means valuable documentation is not being found by consumers. In order to make this dropdown more obvious, we've replaced the header with the dropdown when there are more than one API docs to choose from in the `<customelement-manifest-element>` component.

<docs-spacer></docs-spacer>

## Bug Fixes

### Allow ZUI Spinner CSS variables to inherit styles

We've made it easier for `<zui-spinner>` and `<zui-spinner-overlay>` to inherit styles that you override via CSS variables! Previously, we defined CSS variables and assigned values to them on `<zui-spinner-overlay>` instead of setting them as fallback values.

<docs-spacer size="small"></docs-spacer>

```css
/* example from <zui-spinner-overlay>'s stylesheet */
:host {
  --zui-spinner-overlay-color: #fff;
  --zui-spinner-overlay-transition: 0.5s;
  --zui-spinner-overlay-opacity: 1;

  opacity: var(--zui-spinner-overlay-opacity);
  background-color: var(--zui-spinner-overlay-color);
  transition: opacity var(--zui-spinner-overlay-transition);
}
```
<br>

This made it difficult to override them because you had to be very specific with your CSS declarations.

To make it easier, we've set these as fallback values instead:

```css
/* example from <zui-spinner-overlay>'s stylesheet */
:host {
  opacity: var(--zui-spinner-overlay-opacity, 1);
  background-color: var(--zui-spinner-overlay-color, #fff);
  transition: opacity var(--zui-spinner-overlay-transition, 0.5s);
}
```

<docs-spacer></docs-spacer>

## Deprecations and removed features

### Step Flow moved from being imported by default when using @zywave/zui-bundle

The `<zui-step-flow>` element has long been marked as deprecated, but all applications have still be loading it despite very few consumers today. With this release, by default, `<zui-step-flow>` will not be defined when using `@zywave/zui-bundle`, and consumers must explicitly import it.

**Before:**
```html
<script type="module" "https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>
```

**After:**
```html
<script type="module" "https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/bundle.js"></script>
<script type="module" "https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/components/step-flow.js"></script>
```

<docs-spacer></docs-spacer>

## Maintenance

### Updated Sass map functions

In preparation for Dart Sass 3.0.0, which will be introducing numerous breaking changes, we've replaced map functions `map-get` with `map.get` and `map-has-key` with `map.has-key`. Consumers should not be affected by this change.
