---
layout: blog
type: blogPost
title: Release Notes - January 2025
description: Validation and form fixes
date: 2025-01-09T23:48:10.402Z
hideToc: false
tags:
    - Release Notes
---

## Enhancements

### Inputs now participate in native form validation

Browsers have converged on supporting form validation of custom elements, meeting [baseline availability in 2023](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setValidity#browser_compatibility).

We've begun adding native form validation support to ZUI, starting first with `<zui-input>` and `<zui-input-file>`.

The following attributes will now begin reporting validation errors on form submission (or can be manually triggered via [`reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)):
- required
- min
- max
- minlength
- maxlength
- pattern
- step
- type
  - number
  - email
  - url

Unless provided by consumers, validation messages will be as sourced from the browser if using a native input element. Validation messages can be provided by adding attributes in the following syntax: `validation-message-{reason}`.

Additionally, you can provide custom validation messages via `setCustomValidity()`, [as you can with a native input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity).

Now that we have natively implemented form validation, CSS selectors such as `:invalid` and `:valid` will now match, and `<zui-input>` will now automatically render that it is in an invalid state without consumers having to provide their own custom styles or use [the provided `is-invalid` class](/design-system/components/text-inputs/?tab=demos#invalid-input).

#### Example

```html
<form>
    <label for="releasedate">ZUI Form Validation Release Date:</label>
    <zui-input 
        id="releasedate"
        name="releasedate"
        type="date" 
        required="" 
        min="2025-01-01" 
        max="2025-12-31"
        validation-message-required="You must provide a date"
        validation-message-min="The date cannot be before January 1st, 2025"
        validation-message-max="The date cannot be after December 31st, 2025"></zui-input>
    <zui-button><button type="submit">Submit</button></zui-button>
</form>
```

### Summary of new attributes, properties, methods, events, and CSS

1. **Attributes**
    - `validation-message-min`
    - `validation-message-max`
    - `validation-message-step`
    - `validation-message-minlength`
    - `validation-message-maxlength`
    - `validation-message-type`
    - `validation-message-pattern`
    - `validation-message-required`
1. **Properties**
    - `willValidate` (readonly)
    - `validity` (readonly)
        - See: <https://developer.mozilla.org/en-US/docs/Web/API/ValidityState>
    - `validationMessage` (readonly)
1. **Methods**
    - `checkValidity()`
    - `reportValidity()`
    - `setCustomValidity(message: string)`
1. **Events**
    - `invalid`
        - See: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event>
1. **CSS**
    - `:valid`
    - `:invalid`

<docs-note>

<strong>Note:</strong> <code>:user-valid</code> and <code>:user-invalid</code> are not currently supported. See <a target="_blank" href="https://github.com/whatwg/html/issues/9639">https://github.com/whatwg/html/issues/9639</a> for more information.

</docs-note>


### Input now supports regex pattern validation

While adding validation support, we now have a reason to add more validation properties. With this enhancement, we've added a `pattern` attribute to `<zui-input>`, which will mirror [the functionality of the browser counterpart](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/pattern).

## Bug fixes

### ZUI Radio now correctly participates in form submissions

`<zui-radio>` was not properly participating in form submissions. This release resolves that issue, so that named radio elements will be included in form data as intended.

## Deprecations and removed features

### Removed: Input's "maxlength" property

We marked the `maxlength` property as deprecated in [February 2022](https://gitlab.com/zywave/app-platform/devkit/web-sdk/zui/-/commit/9b1a13d222361ebde694d9c059057d54426a5d0e) to align with the web platform analogs of [`maxLength`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/maxLength) and [`minLength`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/minLength). 

This removal is unlikely to cause any impact, but if there is impact it is to swap out _property_ bindings to go from `maxlength` to `maxLength`. **Note:** The attribute is unchanged; it is still `maxlength` [like the native counterpart](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength).
