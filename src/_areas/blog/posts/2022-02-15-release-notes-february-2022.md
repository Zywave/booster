---
layout: blog
type: blogPost
title: Release Notes - February 2022
description: Date inputs, table improvements, no spinner design changes, and bug fixes!
date: 2022-02-15T17:55:56.739Z
hideToc: false
tags:
  - Release Notes
---
We took the shortest month of the year to focus on some general issues in ZUI to improve the quality of the toolkit for our users. While maybe not as flashy, we're still pretty excited for what we're shipping in this release!

## Table improvements

If you missed it, we launched the new ZUI Table component in our December 2021 release. We highly encourage you to use this new component, if possible, when building new tables as we'll be continually improving the component over time.

Let's jump into some big changes coming to table this month!

<docs-spacer size="small"></docs-spacer>

### Sortable columns

![](/images/zui-table-sortable-example.png)

When we kicked off table, we had a number of features we believed would solve the majority of table use-cases at Zywave today:

* Search 
* Basic column layout 
* Empty results 
* Mobile layout 
* Sortable columns 

In December and January, we shipped all of those... except sort. 

We're happy to say that with this release, we've added the sort feature to ZUI table. To use this feature, you'll be responsible for marking your header row cells with a new `sortable` attribute. You can also control the initial sort direction with the new `sort` attribute. 

When applied, the cell will become clickable and render the sort direction to the end user. When the user interacts with the cell, we'll dispatch a new `sort` event from table.

<docs-note><strong>Note:</strong> We only support a single column being sorted at any given moment. Multi-column support is something we may consider in the future.</docs-note>

<docs-spacer size="small"></docs-spacer>

### Responsive design fixes

Last month, we brought you the first [batch of responsive table features](https://booster.zywave.dev/blog/posts/2022-01-20-release-notes-january-2022/#zui-table-is-now-mobile-responsive), something notably lacking from the Zywave ecosystem. However, we noticed some small issues with the table topbar component as we approached our release date that we wanted to circle back to address.

Take a look at the before and after below to get a feel for the change:

<docs-spacer size="small"></docs-spacer>

#### Unresponsive table topbar

![Animated example of a ZUI table shrinking to mobile width to showcase an unresponsive topbar where the elements collide.](/images/zui-table-topbar-unresponsive-example.gif)

Notice how the search bar in the topbar shrinks to obscure the placeholder text. That is undesirable.

<docs-spacer size="small"></docs-spacer>

#### Responsive table topbar

![Animated example of a ZUI table shrinking to mobile width to showcase a responsive topbar where the elements react to the lack of space by stacking.](/images/zui-table-topbar-responsive-example.gif)

Elements in the topbar now react according to the space available in the viewport.

<docs-spacer></docs-spacer>
## Date input updates

![ZUI date input with a calendar icon.](/images/zui-input-date.png)

We've long had some design standards around how a date input component should be presented to an end-user. Some curious engineers noticed that the ZUI Input element can be provided [any valid HTML Input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types), and ZUI Input would work with that best it can. This included `date`. 

Previously unofficially supported, we've now enhanced ZUI Input to present a date input with a calendar icon. Under the hood, this is still only a `<input type="date" />`. The underlying date picker component that displays is driven by the user agent, so there may be some inconsistencies noticed between a user of Chrome and another of Firefox.

![ZUI date input with Chrome's built-in date picker component.](/images/zui-input-date-chrome.png)

*Example of ZUI date picker with Chrome's built-in date picker component.*

<docs-spacer size="small"></docs-spacer>

![ZUI date input with Firefox's built-in date picker component.](/images/zui-input-date-firefox.png)

*Example of ZUI date input with Firefox's built-in date picker component.*

<docs-spacer size="small"></docs-spacer>

<docs-note><strong>Note:</strong> At the time of publishing, the date picker component doesn't appear in Chrome and Edge unless you have Experimental Web Platform features enabled or update to version 99 or greater.</docs-note>

<docs-spacer size="small"></docs-spacer>

We also support the [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#min) and [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max) attributes with this update:

```
<zui-input type="date" value="2022-02-24" min="2022-01-01" max="2022-12-31"></zui-input>
```

<docs-spacer></docs-spacer>

## Block ZUI buttons

![Example of ZUI block buttons.](/images/zui-button-block-example.png)

With this release, we are also introducing a new ZUI button style variation: block buttons `<zui-button block>`. This style allows buttons to span the entire width of its parent container. [Check out the design guidelines for more details on how to use block buttons.](https://booster.zywave.dev/design-system/components/buttons/?tab=usage)

<docs-spacer></docs-spacer>

## Enhancement to ZUI button implementation and deprecated classes

Adding block buttons gave us the opportunity to improve implementing ZUI buttons. Previously, all button types and style variations were declared with the `class` attribute. This was confusing since some classes are mutually exclusive e.g., `<zui-button class="primary link">` is invalid.

To lessen confusion, we've categorized button types and styles as such:

<docs-spacer size="small"></docs-spacer>

#### Button types

<zui-table style="--zui-table-columns-template: 12ch 1fr 1fr;">
  <zui-table-row header>
    <zui-table-cell>Types</zui-table-cell>
    <zui-table-cell>Deprecated</zui-table-cell>
    <zui-table-cell>New implementation</zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Primary</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="primary"&gt;</code></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button type="primary"&gt;</code></zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Secondary</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="secondary"&gt;</code></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button type="secondary"&gt;</code></zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Link</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="link"&gt;</code></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button type="link"&gt;</code></zui-table-cell>
  </zui-table-row>
</zui-table>

<docs-spacer size="small"></docs-spacer>

#### Button style variations

<zui-table style="--zui-table-columns-template: 18ch 1fr 1fr;">
  <zui-table-row header>
    <zui-table-cell>Style</zui-table-cell>
    <zui-table-cell>Deprecated</zui-table-cell>
    <zui-table-cell>New implementation</zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Danger</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="danger"&gt;</code></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button danger&gt;</code></zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Icon-only</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="icon"&gt;</code> and <code>&lt;zui-button class="icon-only"&gt;</code>
    </zui-table-cell>
    <zui-table-cell><code>&lt;zui-button icon&gt;</code></zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Icon on the right</zui-table-cell>
    <zui-table-cell><code>&lt;zui-button class="icon-right"&gt;</code></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button icon-right&gt;</code></zui-table-cell>
  </zui-table-row>
  <zui-table-row>
    <zui-table-cell>Block</zui-table-cell>
    <zui-table-cell></zui-table-cell>
    <zui-table-cell><code>&lt;zui-button block&gt;</code></zui-table-cell>
  </zui-table-row>
</zui-table>

<docs-spacer size="small"></docs-spacer>

Button types are mututally exclusive from each other, but they can be paired with one or more of the style variations. For example, a common button style we often find in tables within Zywave applications is:

<zui-button type="link" danger>Delete</zui-button>

```html
<zui-button type="link" danger>Delete</zui-button>
```

<docs-spacer></docs-spacer>

## Same old spinner design!

You might be questioning why this is newsworthy. Well, we completely rewrote the ZUI Spinner element, to remove a dated legacy dependency.

You shouldn't notice any UI change with this, however the bundle size did decrease around 15kB in file size. We now only have one more component remaining that continues to use Polymer: ZUI Tabs. Stay tuned for more on that effort in the future.

<docs-spacer></docs-spacer>

## Documentation updates

We invested a good deal of time again this month on component API documentation, e.g. missing or confusing documentation, better typing information, etc. Be sure to check out our component documentation whenever you have questions about what a particular component can do/be configured to do!

<docs-spacer></docs-spacer>

## Bug fixes

And, as always, we included a handful of bug fixes with this release. For a full list of all changes included, [check out the milestone](https://gitlab.com/groups/zywave/devkit/-/milestones/20#tab-issues).