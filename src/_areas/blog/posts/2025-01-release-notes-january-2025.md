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

### Input now supports regex pattern validation

## Bug fixes

### ZUI Radio now correctly participates in form submissions

## Deprecations and removed features

### Removed: Input's "maxlength" property

We marked the `maxlength` property as deprecated in [February 2022](https://gitlab.com/zywave/app-platform/devkit/web-sdk/zui/-/commit/9b1a13d222361ebde694d9c059057d54426a5d0e) to align with the web platform analogs of [`maxLength`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/maxLength) and [`minLength`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/minLength). 

This removal is unlikely to cause any impact, but if there is impact it is to swap out _property_ bindings to go from `maxlength` to `maxLength`. **Note:** The attribute is unchanged; it is still `maxlength` [like the native counterpart](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength).
