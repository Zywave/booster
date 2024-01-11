---
layout: blog
type: blogPost
title: Release Notes - January 2024
description: A handful of small enhancements to ZUI components and more Booster demos!
date: 2024-01-11T21:03:24.871Z
hideToc: false
tags:
  - Release Notes
---
This release includes a lot of small enhancements to some of our ZUI components and minor updates to our component documentations. A handful of demos and code examples have been updated or added to some of our ZUI components as well!

<docs-spacer></docs-spacer>

# Deprecations

## ZUI Tooltip message slot is no longer required
`slot="message"` has been deprecated in ZUI Tooltip in favor of the default slot. Going forward, placing your tooltip message inside `<zui-tooltip></zui-tooltip>` will be the pattern going forward.

```html
<!-- Old way -->
<zui-tooltip>
  <span slot="message">I'm a tooltip message.</span>
</zui-tooltip>

<!-- New way -->
<zui-tooltip>
  I'm a tooltip message.
</zui-tooltip>
```

<docs-spacer></docs-spacer>

# Bug fixes

## Initial selected option for ZUI Select was not respected
We've fixed a bug with ZUI Select where the initial selection's value was not being set.

<docs-spacer></docs-spacer>

# Enhancements

## Event bubbling of ZUI form components
zui-checkbox, zui-picker, zui-radio-group, zui-select, and zui-select-dropdown `change` events now bubble up through their ancestors in the DOM hierarchy to more closely align with native form controls.

<docs-spacer size="small"></docs-spacer>

## ZUI Tooltips margins are now overridable
You can now override the margins with the CSS custom variable `--zui-tooltip-margin`.

```css
zui-tooltip {
  --zui-tooltip-margin: 1em 0.5em 2em .75em;
}
```

<docs-spacer size="small"></docs-spacer>

## ZUI Formfield exposes CSS part to override container CSS styles
You can now override the container styles via the CSS part `container`. This is helpful for overriding the default margin between ZUI Formfields.

```css
zui-formfield::part(container) {
  margin-bottom: 0;
}
```
<docs-spacer size="small"></docs-spacer>

## Better style support for ZUI Button Dropdown options list with icons
Icons in the ZUI Button Dropdown options list will now vertically center for a more aesthetically pleasing dropdown list.

<docs-spacer></docs-spacer>

# Maintenance
Form-associated custom elements are widely supported now in most browsers, so we've removed our polyfill to trim down our bundle size.

