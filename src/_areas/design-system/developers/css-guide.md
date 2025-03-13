---
layout: documentation
title: CSS guide
subtitle: CSS classes to help you build applications faster.
---

## Overview

ZUI exposes a `zui-app-styles` package which is a collection of style files containing both `shared` and `utility` classes for styling. The goal is to create a library of commonly used class names that consumers will become familiar with, thus reducing the need for creating unsemantic, one-off classes, and also minimizing code bloat.

<docs-spacer></docs-spacer>


## Installation

To install `zui-app-styles` there are 2 main ways to add to a project, very similar to how ZUI components are added.

This stylesheet can be found in two packages: `zui-app-styles` and `zui-bundle`. Our recommendation is to point to either location, but unpin the version with `@latest` so you get the benefit of always linking to the latest version of `zui-app-styles`.

<docs-spacer size="small"></docs-spacer>

### Link to zui-bundle's stylesheet (recommended)

```html
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-bundle@latest/dist/css/zui-bundle.app.css" />
```

<docs-spacer size="small"></docs-spacer>

`zui-bundle.app.css` includes both `zui-base-styles` and `zui-app-styles` stylesheets. The benefit of including the `zui-base-styles` stylesheet, is when you use `zui-app-styles` it makes sure browsers render all elements consistently.

<docs-spacer size="small"></docs-spacer>

### Link to zui-app-styles stylesheet directly

```html
<link rel="stylesheet" href="https://cdn.zywave.com/@zywave/zui-app-styles@latest/dist/zui-app-styles.css" />
```

<docs-spacer></docs-spacer>

## Purpose

Stylesheets have a tendency to become excessive and brittle. Naming things is difficult. A class name is chosen but later its meaning can become irrelevant, and future developers aren't certain what styles can be safely removed. Utility classes offer flexibility with semantics, exceptionally useful when a layout significantly changes, you're able to avoid renaming many classes. Conforming to a style library is also efficient for developers and projects.

<docs-spacer size="small"></docs-spacer>

Below is an example of a before and after, to illustrate a common problem, and how `zui-app-styles` can fix this:

<docs-spacer size="small"></docs-spacer>

<docs-grid columns="2">

<div>
<docs-do>

```html
<h2 class="zui row justify-center">A header</h2>
<p class="zui row justify-center">Lorem ipsum...</p>
```
</docs-do>
<br>

Refactored with `zui-app-styles`, the utility classes applied help describe their effect, rather than what the 'element' is.
</div>

<div>
<docs-do-not>

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
</docs-do-not>
<br>

`.header` is appropriately added to an `<h2>`, but it is also applied to a `<p>`, which is not a `header`. The styled appearance of both elements are _correct_ but the names are misrepresented. This might seem farfetched but style authors sometimes reuse classes to avoid creating a redundant copy of a class.
</div>
</docs-grid>

<docs-spacer size="small"></docs-spacer>

Feel free to create your own class names within your project; they're useful when applying several style properties via one class. Combine utility classes with custom classes when necessary.

If applying more than 4 utility classes to an element, consider creating your own CSS class&mdash;especially if you plan to reuse. It's difficult to absorb and visualize what 10 applied utility styles looks like on an element; strive to be organized and succinct.

<docs-spacer></docs-spacer>

## Contents

The `zui-app-styles` package will be broken down with explanations of what each folder contains and the purpose of the contents within them.

<docs-spacer size="small"></docs-spacer>

### /shared/ folder

The `/shared/` folder exists as a hub to house reusable styles between component packages. Unless you're creating a component, you can ignore this.

<docs-spacer size="small"></docs-spacer>

### /utility/ folder

The `/utility/` folder houses different stylesheets based on the type of effects the styles apply. The naming attempts to organize and define the styles. We will provide a description for each stylesheet below.

<docs-spacer size="small"></docs-spacer>

#### .zui class / zui-all-reset.scss

The stylesheet `zui-all-reset.scss` is responsible for ensuring all ZUI utility classes do not clash with third-party stylesheets.

To use any and all ZUI utility classes, the CSS class ** `.zui` must be added ** to your element's `class` attribute.

```html
<div class="zui"></div>
```

<docs-spacer size="small"></docs-spacer>

The `.zui` class prevents identical class names from colliding by unsetting all styles back to browser default. Take for instance `<div class="row">`: `zui-app-styles` defines a `.row` class and if another third-party stylesheet also has a `.row` class, those 2 class names can mix with unwanted side effects. `.zui` resets the element by removing all applied styles and then applies whatever ZUI utility classes on top of the now clean element.

```html
<div class="zui row"></div>
```

<docs-spacer size="small"></docs-spacer>

#### compositon.scss

`composition.scss` is synonymous with layout. This includes styling for flexbox (flex containers and flex items), pushing items left and right, rows and columns, etc.

<a href="https://gitlab.com/zywave/inner-source/booster/zui/-/blob/main/packages/styles/zui-app-styles/src/utility/composition.scss" target="_blank">View composition.scss file</a>

<docs-spacer size="small"></docs-spacer>

#### elements.scss

`elements.scss` can be thought of as HTML elements, or more solidified objects and items. This includes stylings for tables (`thead`, `th`, `tr`), line breaks, hyperlinks, etc.

<a href="https://gitlab.com/zywave/inner-source/booster/zui/-/blob/main/packages/styles/zui-app-styles/src/utility/elements.scss" target="_blank">View elements.scss file</a>

<docs-spacer size="small"></docs-spacer>

#### spatial.scss

`spatial.scss` includes classes for sizing, box model effects, margins and paddings, etc.

The margin and padding utility classes are based on what we refer to as "t-shirt sizes" (e.g., `s`, `m`, `l`, `xl`). These sizes are static and do not grow or shrink in response to the viewport width. If you need them to be dynamic, consider writing your own classes with media and container queries.

<a href="https://gitlab.com/zywave/inner-source/booster/zui/-/blob/main/packages/styles/zui-app-styles/src/utility/spatial.scss" target="_blank">View spatial.scss file</a>

<docs-spacer size="small"></docs-spacer>

#### typography.scss

This stylesheet houses all things related to font sizing, weights, truncation, text alignment, and some validation error highlighting.

<a href="https://gitlab.com/zywave/inner-source/booster/zui/-/blob/main/packages/styles/zui-app-styles/src/utility/typography.scss" target="_blank">View typography.scss file</a>

<docs-spacer></docs-spacer>

## Mobile first approach

We aim to provide the best user experience possible by taking a mobile-first approach. This means we design for the smallest screen size first (`30em` or `480px`), then progressively enhance the experience as more screen real estate becomes available.

<docs-spacer></docs-spacer>

## Breakpoints

Breakpoints are defined points or widths for your site's content to respond to in order to provide the best possible layout for users to consume information.

There are 6 breakpoints available. The breakpoints are not named after devices because there are thousands of them. Instead, we use t-shirt sizes. We recommend using `em`s in media queries for proper scaling across multiple devices.

| Sizes | Breakpoints in `em`* | Breakpoints in `px` |
| :---- | :------------------- | :------------------ |
| XXS   | 30em                 | 480px               |
| XS    | 45em                 | 720px               |
| S     | 60em                 | 960px               |
| M     | 64em                 | 1024px              |
| L     | 80em                 | 1280px              |
| XL    | 120em                | 1920px              |

<small>\*`em` units are based off the browser's default font size of 16px</small>

<docs-note>Did you know we provide SCSS variables for these breakpoints in the <a href="https://gitlab.com/zywave/inner-source/booster/zui/-/blob/main/packages/styles/zui-base-styles/src/_variables.scss" target="_blank">ZUI Toolkit</a>?</docs-note>

<docs-spacer size="small"></docs-spacer>

### Why use `em` values for media queries?

During our research, we found that pixels, which are an absolute unit, do not scale appropriately across multiple devices due to various pixel densities. `em`s, however, are relative to their direct or nearest parent font size and do a better job of scaling and are more precise. Also, they are more widely supported than `rem`s, so we recommend using `em`s for all media queries.

<docs-spacer></docs-spacer>

## Font sizes

With ZUI, all applications should set their root font size to `100%`, which usually equates to `16px` and is the default browser font size. Then, set your body font size in `rem`. This helps with accessibility, zooming, and different pixel densities.

```css
html {
  font-size: 100%; /* 16 */
}

body {
  font-size: 0.875rem; /* 14 / 16 */
}
```

<docs-spacer></docs-spacer>

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

<docs-spacer size="small"></docs-spacer>

### Pixel (px)

Pixels are only recommended for spacing and layout, but not for font-size. As an absolute unit, pixels do not scale if users increase their browser font size. A great example of when to use pixels is border widths.

<docs-note>Still not sure if you should be using pixels? If scaling and proportions are important, you probably shouldn't use pixels. Use relative units instead.</docs-note>

<docs-spacer size="small"></docs-spacer>

### Percent (%)

Percents are great for creating a fluid layout, or for scaling purposes. Elements will resize to a defined percentage of the total space available to them, provided by their parent container. Setting an image's size in percents will allow it to grow and shrink as the screen real estate changes.

<docs-spacer size="small"></docs-spacer>

### em

`em`s are recommended for font sizes and when proportions are important. An `em` is equal to its parent's font size. For example, if a container's font size is set to `30px`, then `1em` is equal to `30px` and `2em` is equal to `60px`.

<docs-spacer size="small"></docs-spacer>

### rem

`rem`s are also recommended for font sizes and when proportionsa are important, with one caveat that they will always be relative to the _root element_'s (`<html>`) font size. For example, if a root element's font size is set to `16px`, a container's font size is set to `18px`, but its padding is set to `1rem`, the `1rem` equates to `16px`.

<docs-spacer size="small"></docs-spacer>

### Viewport width (vw)

`vw` is similar to `%` with the exception that it depends on the width of the viewport and not its parent element. This unit is best used when your element relys on the width of the viewport, regardless of its parent container.

<docs-spacer size="small"></docs-spacer>

### Viewport height (vh)

`vh` is also similar to `%` with the exception that it depends on the height of the viewport and not its parent element. This unit is best used when your element relys on the height of the viewport, regardless of its parent container.

<docs-spacer></docs-spacer>

## CSS unit conversions

Provided below are two formulas for the most common unit conversions.

<docs-spacer size="small"></docs-spacer>

### px to rem

```shell
[pixel] / [root font size] = [new rem value]

# example
30px / 16px = 1.875rem
```

<docs-spacer size="small"></docs-spacer>

### px to %

```shell
[pixel] / [parent container width] * 100 = [new % value]

# example
600px / 1024px * 100 = 58.59375%
```
