---
layout: documentation
title: CSS guide
subtitle: CSS classes to help you build applications faster.
---

<Tabs :tabs="['zui-app-styles', 'Responsive design']">

<TabPage>
<!-- zui-app-styles page -->
<TOC>
    <TOCItem href="#overview">Overview</TOCItem>
    <TOCItem href="#installation">Installation</TOCItem>
    <TOCItem href="#purpose">Purpose</TOCItem>
    <TOCItem href="#contents">Contents</TOCItem>
        <TOC>
            <TOCItem href="#shared">/shared/ folder</TOCItem>
        </TOC>
        <TOC>
            <TOCItem href="#utility">/utility/ folder</TOCItem>
            <TOC>
                <TOCItem href="#zui-class">.zui class / zui-all-reset.scss</TOCItem>
                <TOCItem href="#composition">composition.scss</TOCItem>
                <TOCItem href="#elements">elements.scss</TOCItem>
                <TOCItem href="#spatial">spatial.scss</TOCItem>
                <TOCItem href="#typography">typography.scss</TOCItem>
            </TOC>
        </TOC>
    <!-- <TOCItem href="#examples">Examples</TOCItem> -->
</TOC>

---

<TOCItemId id="overview">

## Overview

</TOCItemId>

ZUI exposes a `zui-app-styles` package which is a collection of style files containing both `shared` and `utility` classes for styling. The goal is to create a library of commonly used class names that consumers will become familiar with, thus reducing the need for creating unsemantic, one off classes, and also minimizing code bloat.

---

<TOCItemId id="installation">

## Installation

</TOCItemId>

To install `zui-app-styles` there are 2 main ways to add to a project, very similar to how ZUI components are added.

<Spacer size="small" />

** 1. Link to the `zui-app-styles` stylesheet via CDN **

This stylesheet can be found in two packages: `zui-app-styles` and `zui-bundle`. Our recommendation is to point to either location, but unpin the version with `@latest` so you get the benefit of always linking to the latest version of `zui-app-styles`.

<Spacer size="small" />

** 1A. Link to `zui-bundle`'s stylesheet (recommended) **

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/@zywave/zui-bundle@4.0.15/dist/css/zui-bundle.app.css" />
</head>
```

`zui-bundle.app.css` includes both `zui-base-styles` and `zui-app-styles` stylesheets. The benefit of including the `zui-base-styles` stylesheet, is when you use `zui-app-styles` it makes sure browsers render all elements consistently.

<Spacer size="small" />

** 1B. Link to `zui-app-styles` stylesheet directly **

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/@zywave/zui-app-styles@latest/dist/zui-app-styles.css" />
</head>
```

<Spacer size="small" />

** 2. Add as a dependency to your project via NPM or Yarn **

Adding the `zui-app-styles` package as a dependency via NPM or Yarn to your project has the benefit of providing VS Code with intellisense. When you start typing a class name in HTML, your editor can provide suggestions for completion.

Since most Zywave packages are private, include a `.yarnrc` or `.npmrc` file in your parent directory and point it to the registry:

```shell
# yarnrc
"@zywave:registry" "http://packages.zywave.com/npm/private-npm/"

# npmrc
@zywave:registry=http://packages.zywave.com/npm/private-npm/
```

<Spacer size="small" />

After that, you can now access all Zywave packages and specifically `zui-app-styles` for installation:

```shell
# Yarn
yarn add @zywave/zui-app-styles@latest

# NPM
npm install @zywave/zui-app-styles@latest

# Tip: Include `@next` at the end of your ZUI package name to get the most recent pre-released version.
# However, `@next` should never make it it production because it is unstable.
# For example: yarn add @zywave/zui-app-styles@next
```

---

<TOCItemId id="purpose">

## Purpose

</TOCItemId>

Stylesheets have a tendency to become excessive and brittle. Naming things is difficult. A class name is chosen but later its meaning can become irrelevant, and future developers aren't certain what styles can be safely removed. Utility classes offer flexibility with semantics, exceptionally useful when a layout signicantly changes, you're able to avoid renaming many classes. Conforming to a style library is also effecient for developers and projects.

<Spacer size="small" />

Below is an example of a before and after, to illustrate a common problem, and how `zui-app-styles` can fix this:

<Grid>
<GridCol col="span-6">

<Do />

```html
<h2 class="zui row justify-center">A header</h2>
<p class="zui row justify-center">Lorem ipsum...</p>
```

Refactored with `zui-app-styles`, the utility classes applied help describe their effect, rather than what the 'element' is.

</GridCol>
<GridCol col="span-6">

<DoNot />

```css
.header {
  display: flex;
  justify-content: center;
}
```

```html
<h2 class="header">A header</h2>
<p class="header">Lorem ipsum...</p>
```

`.header` is appropriately added to an `<h2>`, but it is also applied to a `<p>`, which is not a `header`. The styled appearance of both elements are 'correct' but the names are misrepresented. This might seem farfetched but style authors sometimes reuse classes to avoid creating a redundant copy of a class.

</GridCol>
</Grid>

<Spacer size="small"/>

Feel free to create your own class names within your project; they're useful when applying several style properties via one class. Combine utility classes with custom classes when necessary.

If applying more than 4 utility classes to an element, consider creating your own CSS class&mdash;especially if you plan to reuse. It's difficult to absorb and visualize what 10 applied utility styles looks like on an element; strive to be organized and succinct.

---

<TOCItemId id="contents">

## Contents

</TOCItemId>

The `zui-app-styles` package will be broken down with explanations of what each folder contains and the purpose of the contents within them.

<Spacer size="small" />

<TOCItemId id="shared">

### `/shared/` folder

</TOCItemId>

The `/shared/` folder exists as a hub to house reusable styles between component packages. Unless you're creating a component, you can ignore this.

<Spacer size="small" />

<TOCItemId id="utility">

### `/utility/` folder

The `/utility/` folder houses different stylesheets based on the type of effects the styles apply. The naming attempts to organize and define the styles. We will provide a description for each stylesheet below.

</TOCItemId>

<Spacer size="small" />

<TOCItemId id="zui-class">

#### `.zui` class / `zui-all-reset.scss`

</TOCItemId>

These 2 stylesheets are responsible for ensuring all ZUI utility classes do not clash with third-party stylesheets:

- `.zui-all-reset.scss` (for modern browsers)
- `.zui-all-reset.bs.scss` (for IE11)

To use any and all ZUI utility classes, the CSS class ** `.zui` must be added ** to your element's `class` attribute.

The `.zui` class prevents identical class names from colliding by unsetting all styles back to browser default. Take for instance `<div class="row">`: `zui-app-styles` defines a `.row` class and if another third-party stylesheet also has a `.row` class, those 2 class names can mix with unwanted side effects. `.zui` resets the element by removing all applied styles and then applies whatever ZUI utility classes on top of the now clean element.

<Spacer size="small" />

<TOCItemId id="composition">

#### `compositon.scss`

</TOCItemId>

`composition.scss` is synonymous with layout. This includes styling for flexbox (flex containers and flex items), pushing items left and right, rows and columns, etc.

<zui-expander unresolved expand-label="Show file..." collapse-label="Collapse file...">
  <div slot="content">

```scss
/**
* Note everything must be prefixed with the "zui" class to get intended behavior
* Usage example: .zui.row => <div class="zui row"></div>
**/

.zui.row {
  display: flex;
}

.zui.row-inline {
  display: inline-flex;
}

.zui.column {
  display: flex;
}

.zui.column {
  flex-direction: column;
}

.zui.wrap {
  flex-wrap: wrap;
}

.zui.justify-start {
  justify-content: flex-start;
}

.zui.justify-center {
  justify-content: center;
}

.zui.justify-end {
  justify-content: flex-end;
}

.zui.justify-between {
  justify-content: space-between;
}

.zui.align-start {
  align-items: flex-start;
}

.zui.align-center {
  align-items: center;
}

.zui.align-end {
  align-items: flex-end;
}

.zui.push-right {
  margin-left: auto;
}

.zui.push-left {
  margin-right: auto;
}

.zui.push-center {
  margin-right: auto;
  margin-left: auto;
}

.zui.flex-grow {
  flex-grow: 1;
}

.zui.flex-shrink-none {
  flex-shrink: 0;
}
```

  </div>
</zui-expander>

<Spacer size="small" />

<TOCItemId id="elements">

#### `elements.scss`

</TOCItemId>

`elements.scss` can be thought of as HTML elements, or more solidifed objects and items. This includes stylings for tables (`thead`, `th`, `tr`), line breaks, links, etc.

<zui-expander unresolved expand-label="Show file..." collapse-label="Collapse file...">
  <div slot="content">

```scss
/**
 * Elements utilities are for styles that define things and elements, think tables, links, etc.
 * Note everything must be prefixed with the "zui" class to get intended behavior
 * Usage example: table.zui.table => <table class="zui table"></table>
 **/

.zui.shell-content-wrapper {
  @include layout-padding;
  width: 100%;
  max-width: $zui-max-width;
  margin-right: auto;
  margin-left: auto;
  background: var(--zui-layout-background, transparent);

  &.full {
    @include layout-padding;
    max-width: none;
  }

  &.slim {
    @include layout-padding;
    max-width: rem(960);
  }
}

.zui.line-break {
  display: block;
  height: 1px;
  margin: 1em 0;
  padding: 0;
  border: 0;
  border-top: 1px solid var(--zui-gray-300);
}

.zui.link {
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  font-weight: 500;
  cursor: pointer;
  color: var(--zui-blue);
  text-decoration: underline;

  &:hover {
    color: var(--zui-blue-400);
  }

  &:focus {
    outline: rem(1) solid var(--zui-blue);
    outline-offset: rem(4);
    text-decoration: none;
  }

  &:active {
    outline: none;
    color: var(--zui-blue-600);
    text-decoration: underline;
  }
}

.zui.skinny-scrollbar {
  @extend %skinny-scrollbar;
}

table.zui.table {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-collapse: collapse;
  border-spacing: 0;

  thead.sortable,
  thead.filterable {
    th {
      padding: rem(16.5) rem(20);

      &.sort,
      &.filter {
        padding-left: rem(10);
        cursor: pointer;

        * {
          display: flex;
          align-items: center;
        }

        zui-icon {
          fill: var(--zui-blue);
        }
      }

      &.filter zui-icon {
        margin-right: rem(5);
      }
    }
  }

  th {
    padding: rem(16.5) rem(20);
    background: var(--zui-gray-25);
    font-weight: 600;
    text-align: left;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  td {
    padding: rem(12) rem(20);
    background-color: #fff;
    border: 1px solid var(--zui-gray-200);
    text-align: left;
    word-break: break-word;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }

  .actions {
    vertical-align: middle;
    padding: 0 rem(20);
    line-height: 1;
  }
}
```

  </div>
</zui-expander>

<Spacer size="small" />

<TOCItemId id="spatial">

#### `spatial.scss`

</TOCItemId>

`spatial.scss` includes classes for sizing, box model effects, margin and padding etc.

The margin and padding utility classes are based on what we refer to as 't-shirt sizes', i.e. `s`, `m`, `l`, `xl`, etc. These sizes are dynamic in that they will grow or shrink in response to viewport width, so do not depend on them as static dimensions. If you need exactly `1rem` of padding on all screens consider writing your own class.

<zui-expander unresolved expand-label="Show file..." collapse-label="Collapse file...">
  <div slot="content">

```scss
/**
 * Note everything must be prefixed with the "zui" class to get intended behavior
 * Usage example: .zui.width-full => <div class="zui width-full"></div>
 **/

.zui.width-full {
  width: 100%;
}

.zui.width-auto {
  width: auto;
}

.zui.margin-none {
  margin: 0;
}

.zui.margin-top-none {
  margin-top: 0;
}

.zui.margin-top-xs {
  margin-top: rem(5);
}

.zui.margin-top-s {
  margin-top: rem(10);
}

.zui.margin-top-m {
  margin-top: rem(20);
}

.zui.margin-top-l {
  margin-top: rem(30);
}

.zui.margin-top-xl {
  margin-top: rem(40);
}

.zui.margin-top-xxl {
  margin-top: rem(50);
}

.zui.margin-right-none {
  margin-right: 0;
}

.zui.margin-right-xs {
  margin-right: rem(5);
}

.zui.margin-right-s {
  margin-right: rem(10);
}

.zui.margin-right-m {
  margin-right: rem(20);
}

.zui.margin-right-l {
  margin-right: rem(30);
}

.zui.margin-right-xl {
  margin-right: rem(40);
}

.zui.margin-right-xxl {
  margin-right: rem(50);
}

.zui.margin-bottom-none {
  margin-bottom: 0;
}

.zui.margin-bottom-xs {
  margin-bottom: rem(5);
}

.zui.margin-bottom-s {
  margin-bottom: rem(10);
}

.zui.margin-bottom-m {
  margin-bottom: rem(20);
}

.zui.margin-bottom-l {
  margin-bottom: rem(30);
}

.zui.margin-bottom-xl {
  margin-bottom: rem(40);
}

.zui.margin-bottom-xxl {
  margin-bottom: rem(50);
}

.zui.margin-left-none {
  margin-left: 0;
}

.zui.margin-left-xs {
  margin-left: rem(5);
}

.zui.margin-left-s {
  margin-left: rem(10);
}

.zui.margin-left-m {
  margin-left: rem(20);
}

.zui.margin-left-l {
  margin-left: rem(30);
}

.zui.margin-left-xl {
  margin-left: rem(40);
}

.zui.margin-left-xxl {
  margin-left: rem(50);
}

/**
*    .zui.padding-*-*
*    Spatial Attributes
**/

.zui-padding-none {
  padding: 0;
}

.zui.padding-xs {
  padding: rem(5);
}

.zui.padding-s {
  padding: rem(10);
}

.zui.padding-m {
  padding: rem(20);
}

.zui.padding-l {
  padding: rem(30);
}

.zui.padding-xl {
  padding: rem(40);
}
```

  </div>
</zui-expander>

<Spacer size="small" />

<TOCItemId id="typography">

#### `typography.scss`

</TOCItemId>

This stylesheet houses all things related to font sizing, weights, truncation, text alignment, and some validation error highlighting.

<zui-expander unresolved expand-label="Show file..." collapse-label="Collapse file...">
  <div slot="content">

```scss
/**
 * Note everything must be prefixed with the "zui" class to get intended behavior
 * Usage example: .zui.font-size-m => <div class="zui font-size-m"></div>
 **/

/**
 *    Font Sizes
 **/
.zui.font-size-xs {
  font-size: rem(11);
}

.zui.font-size-s {
  font-size: rem(12);
}

.zui.font-size-m {
  font-size: rem(14);
}

.zui.font-size-l {
  font-size: rem(16);
}

.zui.font-size-xl {
  font-size: rem(18);
}

.zui.font-size-xxl {
  font-size: rem(20);
}

/**
 *    Font Weights
 **/
.zui.font-weight-light {
  font-weight: 300;
}

.zui.font-weight-regular {
  font-weight: 400;
}

.zui.font-weight-semibold {
  font-weight: 600;
}

.zui.font-weight-bold {
  font-weight: 700;
}

/**
 *    Miscellaneous Text Styles
 **/
.zui.text-align-left {
  text-align: left;
}

.zui.text-align-center {
  text-align: center;
}

.zui.text-align-right {
  text-align: right;
}

.zui.text-break-all {
  word-break: break-all;
}

.zui.text-break-word {
  word-wrap: break-word;
}

.zui.text-ellipsis {
  display: block;
  width: 100%; // update width value if needed
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/**
 *    Text States
 **/
.zui.text-invalid {
  color: var(--zui-red);
}

.zui.text-required::after {
  content: "*";
  font-weight: 600;
  color: var(--zui-red);
}
```

  </div>
</zui-expander>

<Spacer size="small" />

<!-- <TOCItemId id="Examples">

## Examples

</TOCItemId> -->

<!-- end zui-app-styles page -->
</TabPage>
<TabPage>
<!-- Responsive design page -->

## Mobile first approach

We aim to provide the best user experience possible by taking a mobile-first approach. This means we design for the smallest screen size first (`30em` or `480px`), then progressively enhance the experience as more screen real estate becomes available.

---

## Breakpoints

Breakpoints are defined points or widths for your site's content to respond to in order to provide the best possible layout for users to consume information.

There are 6 breakpoints available. The breakpoints are not named after devices because there are thousands of them. Instead, we use t-shirt sizes. We recommend using `em`s in media queries for proper scaling across multiple devices.

| Sizes | Breakpoints in `em` | Breakpoints in `px` |
| :---- | :------------------ | :------------------ |
| XXS   | 30em                | 480px               |
| XS    | 45em                | 720px               |
| S     | 60em                | 960px               |
| M     | 64em                | 1024px              |
| L     | 80em                | 1280px              |
| XL    | 120em               | 1920px              |

<small>\*`em` units are based off the browser's default font size of 16px</small>

<zui-well type="info" static>

Did you know we provide SCSS variables for these breakpoints in the [ZUI Toolkit](https://gitlab.zywave.com/zui/zui)?

</zui-well>

<Spacer size="small"/>

### Why use `em` values for media queries?

During our research, we found that pixels, which are an absolute unit, do not scale appropriately across multiple devices due to various pixel densities. `em`s, however, are relative to their direct or nearest parent font size and do a better job of scaling and are more precise. Also, they are more widely supported than `rem`s, so we recommend using `em`s for all media queries.

---

## Font sizes

With ZUI 4, all applications should set their root font size to `100%`, which usually equates to `16px` and is the default browser font size. Then, set your body font size in `rem`. This helps with accessibility, zooming, and different pixel densities.

```css
html {
  font-size: 100%; /* 16 */
}

body {
  font-size: 0.875rem; /* 14 / 16 */
}
```

---

## CSS units

Ah, the classic debate on which CSS unit to use.

We've provided some guidelines below to help you choose the best unit for your project. In ZUI, we encourage the use of `em`s, `rem`s, and percentages wherever possible because they are scalable and accessible.

| Name            | Unit  | Description                                                     |
| :-------------- | :---- | :-------------------------------------------------------------- |
| Pixel           | `px`  | Absolute unit                                                   |
| Percent         | `%`   | Relative to the same property of the parent element             |
| Em              | `em`  | Relative to its direct or nearest parent font size              |
| Root em         | `rem` | Relative to the root element's font size                        |
| Viewport width  | `vw`  | 1% of the width of the initial containing block (root element)  |
| Viewport height | `vh`  | 1% of the height of the initial containing block (root element) |

<Spacer size="small"/>

### Pixel (`px`)

Pixels are only recommended for spacing and layout, but not for font-size. As an absolute unit, pixels do not scale if users increase their browser font size. A great example of when to use pixels is border widths.

<zui-well type="info" static>Still not sure if you should be using pixels? If scaling and proportions are important, you probably shouldn't use pixels. Use relative units instead.</zui-well>

### Percent (`%`)

Percents are great for creating a fluid layout, or for scaling purposes. Elements will resize to a defined percentage of the total space available to them, provided by their parent container. Setting an image's size in percents will allow it to grow and shrink as the screen real estate changes.

### `em`

`em`s are recommended for font sizes and when proportions are important. An `em` is equal to its parent's font size. For example, if a container's font size is set to `30px`, then `1em` is equal to `30px` and `2em` is equal to `60px`.

### `rem`

`rem`s are also recommended for font sizes and when proportionsa are important, with one caveat that they will always be relative to the _root element_'s (`<html>`) font size. For example, if a root element's font size is set to `16px`, a container's font size is set to `18px`, but its padding is set to `1rem`, the `1rem` equates to `16px`.

### Viewport width (`vw`)

`vw` is similar to `%` with the exception that it depends on the width of the viewport and not its parent element. This unit is best used when your element relys on the width of the viewport, regardless of its parent container.

### Viewport height (`vh`)

`vh` is also similar to `%` with the exception that it depends on the height of the viewport and not its parent element. This unit is best used when your element relys on the height of the viewport, regardless of its parent container.

---

## CSS unit conversions

Provided below are two formulas for the most common unit conversions.

### `px` to `rem`

```shell
[pixel] / [root font size] = [new rem value]

# example
30px / 16px = 1.875rem
```

### `px` to `%`

```shell
[pixel] / [parent container width] * 100 = [new % value]

# example
600px / 1024px * 100 = 58.59375%
```

<!-- end Responsive design page -->
</TabPage>
</Tabs>
