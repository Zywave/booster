---
layout: documentation
title: Getting Started
subtitle: This page is still a work in progress.
---
# Booster Development Network

What we'd like to share in this section is an in-depth explanation of what the Booster Development Network is and if it's the right fit for your project(s).

- - -

# Contribute to the docs

This guide is to empower our community to contribute to the docs with some recommendations, rules, and helpful resources.

## Format docs with custom elements

To maintain consistency, we've created custom elements for patterns that are commonly used throughout the docs.

### Do and do not

Best practices for using components are often called out with examples in two categories: do and do not. Use these custom elements to help convey good and bad practices when writing documentation.

<docs-spacer size="small"></docs-spacer>

#### Do

Calls out examples of good practices.

You can provide your own HTML markup in here, such as an unordered list, if you have more than one example to share.

<div style="background-color: #fff; border: 1px solid var(--zui-gray-400); border-radius: 5px; padding: 1em; margin-bottom: 2em;">
<docs-do>
  Recommended best practices go here.
</docs-do>
</div>

```html
<docs-do>
  Recommended best practices go here.
  You can provide your own HTML markup in here, such as an unordered list, if you have more than one example to share.
</docs-do>
```

<docs-spacer size="small"></docs-spacer>

#### Do not

Calls out examples of bad practices.

You can provide your own HTML markup in here, such as an unordered list, if you have more than one best practice example to share.

<div style="background-color: #fff; border: 1px solid var(--zui-gray-400); border-radius: 5px; padding: 1em; margin-bottom: 2em;">
<docs-do-not>
  <ul>
    <li>Examples of bad practices can be listed here.</li>
    <li>Another example of bad practice.</li>
    <li>Tricky example that may look good, but is actually bad.</li>
  </ul>
</docs-do-not>
</div>

```html
<docs-do-not>
  <ul>
    <li>Examples of bad practices can be listed here.</li>
    <li>Another example of bad practice.</li>
    <li>Tricky example that may look good, but is actually bad.</li>
  </ul>
</docs-do-not>
```

---

### Spacers

To help with spacing consistency between content, we have two spacer sizes.

#### Regular spacer

The regular spacer provides a substantial amount of space between sections.

<div style="background-color: #fff; border: 1px solid var(--zui-gray-400); border-radius: 5px; padding: 1em; margin-bottom: 2em;">
I am section A.

<docs-spacer></docs-spacer>

I am section B and want some space from section A.
</div>

```html
I am section A.

<docs-spacer></docs-spacer>

I am section B and want some space from section A.
```

<docs-spacer size="small"></docs-spacer>

#### Small spacer

If you want a smaller spacer, you can set this by adding the attribute `size="small"` to `<docs-spacer>`.

<div style="background-color: #fff; border: 1px solid var(--zui-gray-400); border-radius: 5px; padding: 1em; margin-bottom: 2em;">
I am section A.

<docs-spacer size="small"></docs-spacer>

I am section B and I want a small amount of space from section B.
</div>

```html
I am section A.

<docs-spacer size="small"></docs-spacer>

I am section B and I want a small amount of space from section B.
```

---

### Grid system

To make writing documentation in Markdown and HTML as simple as possible, we've chosen to simplify the grid system down to a single row where you can set the number of columns you want in your "grid."

To set the number of columns, add the attribute `columns=""` along with a number value between 1 and 12.

<div style="background-color: #fff; border: 1px solid var(--zui-gray-400); border-radius: 5px; padding: 1em; margin-bottom: 2em;">
<docs-grid columns="3">
  <div>
     This is column 1 of 3.
  </div>
  <div>
    This is column 2 of 3.
  </div>
  <div>
    This is column 3 of 3.
  </div>
</docs-grid>
</div>

```html
<docs-grid columns="3">
  <div>
     This is column 1 of 3.
  </div>
  <div>
    This is column 2 of 3.
  </div>
  <div>
    This is column 3 of 3.
  </div>
</docs-grid>
```