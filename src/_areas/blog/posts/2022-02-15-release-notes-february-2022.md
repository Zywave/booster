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

<docs-note>
<strong>Note:</strong> We only support a single column being sorted at any given moment. Multi-column support is something we may consider in the future.
</docs-note>

### Responsive design fixes

Last month, we brought you the first [batch of responsive table features](https://booster.zywave.dev/blog/posts/2022-01-20-release-notes-january-2022/#zui-table-is-now-mobile-responsive), something notably lacking from the Zywave ecosystem. However, we noticed some small issues with the table topbar component as we approached our release date that we wanted to circle back to address.

Take a look at the before and after below to get a feel for the change:

#### Unresponsive table topbar

![Animated example of a ZUI table shrinking to mobile width to showcase an unresponsive topbar where the elements collide.](/images/zui-table-topbar-unresponsive-example.gif)

Notice how the search bar in the topbar shrinks to obscure the placeholder text. That is undesirable.

#### Responsive table topbar

![Animated example of a ZUI table shrinking to mobile width to showcase a responsive topbar where the elements react to the lack of space by stacking.](/images/zui-table-topbar-responsive-example.gif)

Elements in the topbar now react according to the space available in the viewport.

## Date input updates

We've long had some design standards around how a date input component should be presented to an end-user. Some curious engineers noticed that the ZUI Input element can be provided [any valid HTML Input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types), and ZUI Input would work with that best it can. This included `date`. 

Previously unofficially supported, we've now enhanced ZUI Input to present a date input with a calendar icon. Under the hood, this is still only a `<input type="date" />`. The underlying date picker component that displays is driven by the user agent, so there may be some inconsistencies noticed between a user of Chrome and another of Firefox. 

We also support the [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#min) and [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max) attributes with this update.

## Same old spinner design!

You might be questioning why this is newsworthy. Well, we completely rewrote the ZUI Spinner element, to remove a dated legacy dependency.

You shouldn't notice any UI change with this, however the bundle size did drop around 15kB. We now only have one more component remaining that continues to use Polymer: ZUI Tabs. Stay tuned for more on that effort in the future.

## Documentation updates

We invested a good deal of time again this month on component API documentation, e.g. missing or confusing documentation, better typing information, etc. Be sure to check out our component documentation whenever you have questions about what a particular component can do/be configured to do!

## Bug fixes

And, as always, we included a handful of bug fixes with this release. For a full list of all changes included, [check out the milestone](https://gitlab.com/groups/zywave/devkit/-/milestones/20#tab-issues).